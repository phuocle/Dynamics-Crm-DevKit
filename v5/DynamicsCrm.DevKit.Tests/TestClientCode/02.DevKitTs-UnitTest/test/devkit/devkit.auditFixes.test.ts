/**
 * Unit Tests for devkit.ts - members added by the 2026-11-22 client API audit:
 * - field LiveValue (control.getValue as-you-type)
 * - ExecutionContext Direction/Stage/TagValue getters
 * - Utility.UserSettings.GetSecurityRolePrivilegesInfo
 *
 * Using xrm-mock framework for Dynamics 365/Xrm API simulation.
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../../lib/devkit';

describe('audit fixes (2026-11-22) Tests', () => {
    beforeEach(() => {
        (global as any).window = (global as any).window || {};
        XrmMockGenerator.initialise();
        (global as any).window.Xrm = (global as any).Xrm;
    });

    // ========================================================================
    // field LiveValue (control.getValue as-you-type)
    // ========================================================================

    test('field LiveValue returns control.getValue while typing', () => {
        const attribute: any = { getName: () => 'name', getValue: () => 'committed' };
        const control: any = { getName: () => 'name', getAttribute: () => attribute, getValue: () => 'typing' };
        const formContext: any = {
            getControl: () => control,
            getAttribute: () => attribute,
            data: { getIsDirty: () => false, isValid: () => true, entity: { getEntityName: () => 'account' } },
            ui: { getFormType: () => 1 }
        };
        const form = new FormBase(formContext, 'wr', { body: ['name'] });
        expect((form.Body as any).name.LiveValue).toBe('typing');
        expect((form.Body as any).name.Value).toBe('committed');
    });

    test.each([
        ['there is no control', null],
        ['the control has no getValue method', { getControlType: () => 'iframe' }]
    ])('field LiveValue is undefined when %s', (_label, control) => {
        const attribute: any = { getName: () => 'name', getValue: () => 1 };
        const formContext: any = {
            getControl: () => control,
            getAttribute: () => attribute,
            data: { entity: { getEntityName: () => 'account' } },
            ui: { getFormType: () => 1 }
        };
        const form = new FormBase(formContext, 'wr', { body: ['name'] });
        expect((form.Body as any).name.LiveValue).toBeUndefined();
        expect((form.Body as any).name.Value).toBe(1);
    });

    // ========================================================================
    // ExecutionContext Direction/Stage/TagValue getters
    // ========================================================================

    test.each(['Next', 'previous'])('ExecutionContext preserves stage change direction %s', direction => {
        const stage = { getId: () => 'stage-1' };
        const executionContext = {
            getEventArgs: () => ({ getDirection: () => direction, getStage: () => stage })
        };
        const { ExecutionContext } = new FormBase(executionContext, 'wr', {});
        expect(ExecutionContext.Direction).toBe(direction);
        expect(ExecutionContext.Stage).toBe(stage);
        expect(ExecutionContext.TagValue).toBeUndefined();
    });

    test('ExecutionContext reads the selected stage without a direction', () => {
        const stage = { getId: () => 'stage-1' };
        const { ExecutionContext } = new FormBase({
            getEventArgs: () => ({ getStage: () => stage })
        }, 'wr', {});
        expect(ExecutionContext.Stage).toBe(stage);
        expect(ExecutionContext.Direction).toBeUndefined();
    });

    test('ExecutionContext reads the lookup tag and its field name', () => {
        const tag = { id: 'tag-1', name: 'Tag', entityType: 'account', fieldName: 'parentaccountid' };
        const { ExecutionContext } = new FormBase({
            getEventArgs: () => ({ getTagValue: () => tag })
        }, 'wr', {});
        expect(ExecutionContext.TagValue).toBe(tag);
        expect(ExecutionContext.TagValue?.fieldName).toBe('parentaccountid');
        expect(ExecutionContext.Direction).toBeUndefined();
        expect(ExecutionContext.Stage).toBeUndefined();
    });

    test.each([
        ['OnSave', { getEventArgs: () => ({ getSaveMode: () => 1 }) }],
        ['missing event args', { getEventArgs: () => undefined }],
        ['a plain form context', {}],
        ['a missing execution context', null]
    ])('ExecutionContext stage and tag getters are undefined for %s', (_label, executionContext) => {
        const { ExecutionContext } = new FormBase(executionContext, 'wr', {});
        expect(ExecutionContext.Direction).toBeUndefined();
        expect(ExecutionContext.Stage).toBeUndefined();
        expect(ExecutionContext.TagValue).toBeUndefined();
    });

    // ========================================================================
    // Utility.UserSettings.GetSecurityRolePrivilegesInfo
    // ========================================================================

    test('UserSettings.GetSecurityRolePrivilegesInfo resolves the promise', async () => {
        (Xrm.Utility as any).getGlobalContext = () => ({
            userSettings: { getSecurityRolePrivilegesInfo: () => Promise.resolve({ 'priv-1': { privilegeName: 'prvReadAccount' } }) }
        });
        const form = new FormBase(null, 'wr', {});
        const result: any = await (form.Utility.UserSettings as any).GetSecurityRolePrivilegesInfo();
        expect(result['priv-1'].privilegeName).toBe('prvReadAccount');
    });

    test('UserSettings.GetSecurityRolePrivilegesInfo supports callbacks', async () => {
        (Xrm.Utility as any).getGlobalContext = () => ({
            userSettings: { getSecurityRolePrivilegesInfo: () => Promise.resolve({ 'priv-2': { privilegeName: 'prvWriteAccount' } }) }
        });
        const form = new FormBase(null, 'wr', {});
        let successArg: any = null;
        (form.Utility.UserSettings as any).GetSecurityRolePrivilegesInfo((result: any) => { successArg = result; }, null as any);
        await Promise.resolve();
        expect(successArg['priv-2'].privilegeName).toBe('prvWriteAccount');
    });

    test.each([
        ['the API is missing', { userSettings: {} }],
        ['user settings are missing', {}]
    ])('UserSettings.GetSecurityRolePrivilegesInfo handles missing support when %s', async (_label, globalContext) => {
        (Xrm.Utility as any).getGlobalContext = () => globalContext;
        const userSettings = new FormBase(null, 'wr', {}).Utility.UserSettings;
        const result = userSettings.GetSecurityRolePrivilegesInfo();
        await expect(result).rejects.toThrow('getSecurityRolePrivilegesInfo is not available in this client');

        let successCalled = false;
        const onSuccess = () => { successCalled = true; };
        let failure: unknown;
        expect(userSettings.GetSecurityRolePrivilegesInfo(onSuccess, error => { failure = error; })).toBeUndefined();
        expect(failure).toBeUndefined();
        await Promise.resolve();
        expect(failure).toEqual(new Error('getSecurityRolePrivilegesInfo is not available in this client'));
        expect(userSettings.GetSecurityRolePrivilegesInfo(onSuccess)).toBeUndefined();
        await Promise.resolve();
        expect(successCalled).toBe(false);
    });
});
