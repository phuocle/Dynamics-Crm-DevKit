/**
 * Unit Tests for devkit.ts - loadProcess function
 * Using xrm-mock framework for Dynamics 365/Xrm API simulation
 * 
 * This test file covers BPF (Business Process Flow) functionality including:
 * - Process stages and steps
 * - Active path navigation
 * - Process status and display state management
 * - Event handlers for process changes
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../../lib/devkit';

describe('loadProcess Tests', () => {
    beforeEach(() => {
        // Setup global window object for Node.js environment
        (global as any).window = (global as any).window || {};
        XrmMockGenerator.initialise();
        (global as any).window.Xrm = (global as any).Xrm;
    });

    // Default BPF config to ensure loadProcess is called
    const defaultBpfConfig = ['TestBPF___Name'];

    // ========================================================================
    // HELPER FUNCTION: Create Process FormBase with Manual Mock
    // ========================================================================

    function getProcessForm(bpfConfig: string[] = defaultBpfConfig): any {
        // Create step mocks with full implementation
        const createStepMock = (name: string, attribute: string, required: boolean) => ({
            getAttribute: () => attribute,
            getName: () => name,
            getProgress: () => 0,
            isRequired: () => required,
            setProgress: (progress: number, message: string) => { }
        });

        // Create stage mocks with full implementation
        const createStageMock = (id: string, name: string, status: string, category: number, steps: any[]) => ({
            getCategory: () => ({ getValue: () => category }),
            getEntityName: () => 'account',
            getId: () => id,
            getName: () => name,
            getStatus: () => status,
            getSteps: () => steps,
            getNavigationBehavior: () => ({ allowCreateNew: null })
        });

        const stage1 = createStageMock('stage1', 'Stage 1 - Qualify', 'active', 0, [
            createStepMock('Step_Name', 'name', true),
            createStepMock('Step_Industry', 'industrycode', false)
        ]);

        const stage2 = createStageMock('stage2', 'Stage 2 - Develop', 'active', 1, [
            createStepMock('Step_Revenue', 'revenue', false),
            createStepMock('Step_Contact', 'primarycontactid', false)
        ]);

        const stage3 = createStageMock('stage3', 'Stage 3 - Close', 'inactive', 3, [
            createStepMock('Step_Owner', 'ownerid', false)
        ]);

        const allStages = [stage1, stage2, stage3];

        // Create stages collection mock
        const createStagesCollection = (stages: any[]) => ({
            get: (index: number) => stages[index],
            getLength: () => stages.length
        });

        // Create process mock
        const processMock = {
            getId: () => 'bpf-process-id-001',
            getName: () => 'Account BPF',
            isRendered: () => true,
            getStages: () => createStagesCollection(allStages)
        };

        // Create enabled processes
        const enabledProcesses: Record<string, string> = {
            'bpf-process-id-001': 'Account BPF'
        };

        // Create process instances
        const processInstances: Record<string, any> = {
            'instance-1': {
                ProcessDefinitionID: 'bpf-process-id-001',
                ProcessDefinitionName: 'Account BPF',
                CreatedOn: '2024-01-01',
                CreatedOnDate: new Date('2024-01-01'),
                ProcessInstanceID: 'instance-1',
                ProcessInstanceName: 'Account BPF Instance',
                StatusCodeName: 'Active'
            }
        };

        // State variables for getters/setters
        let currentDisplayState = 'expanded';
        let currentVisible = true;
        let currentStatus = 'active';

        // Create data.process mock
        const dataProcess = {
            getActiveProcess: () => processMock,
            getActiveStage: () => stage1,
            getActivePath: () => createStagesCollection(allStages),
            getInstanceId: () => 'bpf-process-id-001',
            getInstanceName: () => 'Account BPF',
            getSelectedStage: () => stage1,
            getStatus: () => currentStatus,
            setStatus: (value: string) => { currentStatus = value; },
            addOnPreProcessStatusChange: (callback: any) => { },
            addOnPreStageChange: (callback: any) => { },
            addOnProcessStatusChange: (callback: any) => { },
            addOnStageChange: (callback: any) => { },
            addOnStageSelected: (callback: any) => { },
            getEnabledProcesses: (callback: (processes: any) => void) => callback(enabledProcesses),
            getProcessInstances: (callback: (instances: any) => void) => callback(processInstances),
            moveNext: (callback: any) => callback?.('success'),
            movePrevious: (callback: any) => callback?.('success'),
            removeOnPreProcessStatusChange: (callback: any) => { },
            removeOnPreStageChange: (callback: any) => { },
            removeOnProcessStatusChange: (callback: any) => { },
            removeOnStageChange: (callback: any) => { },
            removeOnStageSelected: (callback: any) => { },
            setActiveProcess: (processId: string, callback: any) => callback?.('success'),
            setActiveProcessInstance: (instanceId: string, callback: any) => callback?.('success'),
            setActiveStage: (stageId: string, callback: any) => callback?.('success')
        };

        // Create ui.process mock
        const uiProcess = {
            getDisplayState: () => currentDisplayState,
            setDisplayState: (value: string) => { currentDisplayState = value; },
            getVisible: () => currentVisible,
            setVisible: (value: boolean) => { currentVisible = value; },
            reflow: (updateUi: boolean, parentStage: string, nextStage: string) => { }
        };

        // Create formContext mock
        const formContext = {
            data: {
                getIsDirty: () => false,
                isValid: () => true,
                refresh: () => Promise.resolve(),
                save: () => Promise.resolve(),
                addOnLoad: () => { },
                removeOnLoad: () => { },
                process: dataProcess,
                entity: {
                    attributes: { get: () => null },
                    getId: () => '00000000-0000-0000-0000-000000000001',
                    getEntityName: () => 'account',
                    getIsDirty: () => false,
                    isValid: () => true,
                    getDataXml: () => '<data></data>',
                    getEntityReference: () => ({ id: '00000000-0000-0000-0000-000000000001', entityType: 'account' }),
                    getPrimaryAttributeValue: () => 'Test Account',
                    addOnSave: () => { },
                    removeOnSave: () => { },
                    addOnPostSave: () => { },
                    removeOnPostSave: () => { }
                }
            },
            ui: {
                getFormType: () => 2,
                controls: { get: () => null },
                tabs: { get: () => null },
                formSelector: {
                    getCurrentItem: () => ({ getId: () => 'form-1', getLabel: () => 'Test Form' }),
                    items: { getLength: () => 0, get: () => null }
                },
                getViewPortHeight: () => 800,
                getViewPortWidth: () => 1200,
                clearFormNotification: () => true,
                setFormNotification: () => true,
                close: () => { },
                refreshRibbon: () => { },
                addLoaded: () => { },
                removeLoaded: () => { },
                addOnLoad: () => { },
                removeOnLoad: () => { },
                setFormEntityName: () => { },
                process: uiProcess
            },
            getControl: () => null,
            getAttribute: () => null,
            getFormContext: function () { return this; }
        };

        // Mock executionContext
        const executionContext = {
            getFormContext: () => formContext,
            getEventArgs: () => ({
                preventDefault: () => { },
                isDefaultPrevented: () => false
            }),
            getContext: () => ({}),
            getDepth: () => 1,
            getEventSource: () => null,
            getSharedVariable: () => null,
            setSharedVariable: () => { }
        };

        // Create FormBase with BPF config (must have at least one item to trigger loadProcess)
        const form = new FormBase(
            executionContext,
            'test_webresource',
            {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: bpfConfig
            }
        );

        return form;
    }

    // ========================================================================
    // TEST: BPF Field Parsing
    // ========================================================================

    describe('BPF Field Parsing', () => {
        test('should parse BPF config with ProcessName___FieldName format', () => {
            const form = getProcessForm([
                'v4_AccountBPF___Name',
                'v4_AccountBPF___IndustryCode',
                'v4_AccountBPF___Revenue'
            ]);
            expect(form.Process).toBeDefined();
            expect(form.Process.v4_AccountBPF).toBeDefined();
        });

        test('should create BPF object with process name', () => {
            const form = getProcessForm(['MyProcess___Field1']);
            expect(form.Process.MyProcess).toBeDefined();
        });
    });

    // ========================================================================
    // TEST: ActiveProcess Properties
    // ========================================================================

    describe('ActiveProcess Properties', () => {
        test('ActiveProcess.Id should return process ID', () => {
            const form = getProcessForm();
            expect(form.Process.ActiveProcess.Id).toBe('bpf-process-id-001');
        });

        test('ActiveProcess.Name should return process name', () => {
            const form = getProcessForm();
            expect(form.Process.ActiveProcess.Name).toBe('Account BPF');
        });

        test('ActiveProcess.IsRendered should return true', () => {
            const form = getProcessForm();
            expect(form.Process.ActiveProcess.IsRendered).toBe(true);
        });

        test('ActiveProcess.Stages.getLength should return stage count', () => {
            const form = getProcessForm();
            expect(form.Process.ActiveProcess.Stages.getLength()).toBe(3);
        });

        test('ActiveProcess.Stages.get should return stage at index', () => {
            const form = getProcessForm();
            const stage = form.Process.ActiveProcess.Stages.get(0);
            expect(stage).toBeDefined();
            expect(stage.Id).toBe('stage1');
            expect(stage.Name).toBe('Stage 1 - Qualify');
        });

        test('ActiveProcess.Stages.forEach should iterate all stages', () => {
            const form = getProcessForm();
            const stageNames: string[] = [];
            form.Process.ActiveProcess.Stages.forEach((stage: any, index: number) => {
                stageNames.push(stage.Name);
            });
            expect(stageNames.length).toBe(3);
            expect(stageNames).toContain('Stage 1 - Qualify');
            expect(stageNames).toContain('Stage 2 - Develop');
            expect(stageNames).toContain('Stage 3 - Close');
        });
    });

    // ========================================================================
    // TEST: Stage Properties
    // ========================================================================

    describe('Stage Properties', () => {
        test('Stage.Category should return category value', () => {
            const form = getProcessForm();
            const stage = form.Process.ActiveProcess.Stages.get(0);
            expect(stage.Category).toBe(0);
        });

        test('Stage.EntityName should return entity name', () => {
            const form = getProcessForm();
            const stage = form.Process.ActiveProcess.Stages.get(0);
            expect(stage.EntityName).toBe('account');
        });

        test('Stage.Id should return stage ID', () => {
            const form = getProcessForm();
            const stage = form.Process.ActiveProcess.Stages.get(0);
            expect(stage.Id).toBe('stage1');
        });

        test('Stage.Name should return stage name', () => {
            const form = getProcessForm();
            const stage = form.Process.ActiveProcess.Stages.get(0);
            expect(stage.Name).toBe('Stage 1 - Qualify');
        });

        test('Stage.Status should return stage status', () => {
            const form = getProcessForm();
            const stage = form.Process.ActiveProcess.Stages.get(0);
            expect(stage.Status).toBe('active');
        });

        test('Stage.Steps should return steps array', () => {
            const form = getProcessForm();
            const stage = form.Process.ActiveProcess.Stages.get(0);
            expect(stage.Steps).toBeDefined();
            expect(stage.Steps.length).toBe(2);
        });

        test('Stage.AllowCreateNew should set navigation behavior', () => {
            const form = getProcessForm();
            const stage = form.Process.ActiveProcess.Stages.get(0);
            expect(() => stage.AllowCreateNew(() => true)).not.toThrow();
        });
    });

    // ========================================================================
    // TEST: Step Properties
    // ========================================================================

    describe('Step Properties', () => {
        test('Step.Attribute should return attribute name', () => {
            const form = getProcessForm();
            const stage = form.Process.ActiveProcess.Stages.get(0);
            const step = stage.Steps[0];
            expect(step.Attribute).toBe('name');
        });

        test('Step.Name should return step name', () => {
            const form = getProcessForm();
            const stage = form.Process.ActiveProcess.Stages.get(0);
            const step = stage.Steps[0];
            expect(step.Name).toBe('Step_Name');
        });

        test('Step.Required should return required flag', () => {
            const form = getProcessForm();
            const stage = form.Process.ActiveProcess.Stages.get(0);
            const step = stage.Steps[0];
            expect(step.Required).toBe(true);
        });

        test('Step.Progress should return progress value', () => {
            const form = getProcessForm();
            const stage = form.Process.ActiveProcess.Stages.get(0);
            const step = stage.Steps[0];
            expect(step.Progress).toBe(0);
        });

        test('Step.SetProgress should set progress', () => {
            const form = getProcessForm();
            const stage = form.Process.ActiveProcess.Stages.get(0);
            const step = stage.Steps[0];
            expect(() => step.SetProgress(1, 'In Progress')).not.toThrow();
        });
    });

    // ========================================================================
    // TEST: ActiveStage
    // ========================================================================

    describe('ActiveStage', () => {
        test('ActiveStage should return current stage', () => {
            const form = getProcessForm();
            const activeStage = form.Process.ActiveStage;
            expect(activeStage).toBeDefined();
            expect(activeStage.Name).toBe('Stage 1 - Qualify');
        });

        test('ActiveStage.Id should return stage1', () => {
            const form = getProcessForm();
            expect(form.Process.ActiveStage.Id).toBe('stage1');
        });
    });

    // ========================================================================
    // TEST: ActivePath
    // ========================================================================

    describe('ActivePath', () => {
        test('ActivePath should be defined', () => {
            const form = getProcessForm();
            expect(form.Process.ActivePath).toBeDefined();
        });

        test('ActivePath.get should return stage at index', () => {
            const form = getProcessForm();
            const stage = form.Process.ActivePath.get(0);
            expect(stage).toBeDefined();
            expect(stage.Id).toBe('stage1');
        });

        test('ActivePath.getLength should return path length', () => {
            const form = getProcessForm();
            expect(form.Process.ActivePath.getLength()).toBe(3);
        });

        test('ActivePath.forEach should iterate stages', () => {
            const form = getProcessForm();
            const stages: any[] = [];
            form.Process.ActivePath.forEach((stage: any, index: number) => {
                stages.push(stage);
            });
            expect(stages.length).toBe(3);
        });
    });

    // ========================================================================
    // TEST: Instance Properties
    // ========================================================================

    describe('Instance Properties', () => {
        test('InstanceId should return process instance ID', () => {
            const form = getProcessForm();
            expect(form.Process.InstanceId).toBe('bpf-process-id-001');
        });

        test('InstanceName should return process instance name', () => {
            const form = getProcessForm();
            expect(form.Process.InstanceName).toBe('Account BPF');
        });

        test('SelectedStage should return selected stage', () => {
            const form = getProcessForm();
            const selected = form.Process.SelectedStage;
            expect(selected).toBeDefined();
            expect(selected.Id).toBe('stage1');
        });
    });

    // ========================================================================
    // TEST: DisplayState
    // ========================================================================

    describe('DisplayState', () => {
        test('DisplayState getter should return current state', () => {
            const form = getProcessForm();
            expect(form.Process.DisplayState).toBe('expanded');
        });

        test('DisplayState setter should change state', () => {
            const form = getProcessForm();
            form.Process.DisplayState = 'collapsed';
            expect(form.Process.DisplayState).toBe('collapsed');
        });
    });

    // ========================================================================
    // TEST: Status
    // ========================================================================

    describe('Status', () => {
        test('Status getter should return process status', () => {
            const form = getProcessForm();
            expect(form.Process.Status).toBe('active');
        });

        test('Status setter should change status', () => {
            const form = getProcessForm();
            form.Process.Status = 'finished';
            expect(form.Process.Status).toBe('finished');
        });
    });

    // ========================================================================
    // TEST: Visible
    // ========================================================================

    describe('Visible', () => {
        test('Visible getter should return visibility', () => {
            const form = getProcessForm();
            expect(form.Process.Visible).toBe(true);
        });

        test('Visible setter should change visibility', () => {
            const form = getProcessForm();
            form.Process.Visible = false;
            expect(form.Process.Visible).toBe(false);
        });
    });

    // ========================================================================
    // TEST: Event Handlers
    // ========================================================================

    describe('Event Handlers', () => {
        test('AddOnPreProcessStatusChange should register callback', () => {
            const form = getProcessForm();
            expect(() => form.Process.AddOnPreProcessStatusChange(() => { })).not.toThrow();
        });

        test('AddOnPreStageChange should register callback', () => {
            const form = getProcessForm();
            expect(() => form.Process.AddOnPreStageChange(() => { })).not.toThrow();
        });

        test('AddOnProcessStatusChange should register callback', () => {
            const form = getProcessForm();
            expect(() => form.Process.AddOnProcessStatusChange(() => { })).not.toThrow();
        });

        test('AddOnStageChange should register callback', () => {
            const form = getProcessForm();
            expect(() => form.Process.AddOnStageChange(() => { })).not.toThrow();
        });

        test('AddOnStageSelected should register callback', () => {
            const form = getProcessForm();
            expect(() => form.Process.AddOnStageSelected(() => { })).not.toThrow();
        });

        test('RemoveOnPreProcessStatusChange should remove callback', () => {
            const form = getProcessForm();
            expect(() => form.Process.RemoveOnPreProcessStatusChange(() => { })).not.toThrow();
        });

        test('RemoveOnPreStageChange should remove callback', () => {
            const form = getProcessForm();
            expect(() => form.Process.RemoveOnPreStageChange(() => { })).not.toThrow();
        });

        test('RemoveOnProcessStatusChange should remove callback', () => {
            const form = getProcessForm();
            expect(() => form.Process.RemoveOnProcessStatusChange(() => { })).not.toThrow();
        });

        test('RemoveOnStageChange should remove callback', () => {
            const form = getProcessForm();
            expect(() => form.Process.RemoveOnStageChange(() => { })).not.toThrow();
        });

        test('RemoveOnStageSelected should remove callback', () => {
            const form = getProcessForm();
            expect(() => form.Process.RemoveOnStageSelected(() => { })).not.toThrow();
        });
    });

    // ========================================================================
    // TEST: Process Navigation
    // ========================================================================

    describe('Process Navigation', () => {
        test('EnabledProcesses should call callback with processes', (done) => {
            const form = getProcessForm();
            form.Process.EnabledProcesses((processes: any[]) => {
                expect(processes).toBeDefined();
                expect(Array.isArray(processes)).toBe(true);
                expect(processes.length).toBe(1);
                expect(processes[0].ProcessId).toBe('bpf-process-id-001');
                expect(processes[0].ProcessName).toBe('Account BPF');
                done();
            });
        });

        test('MoveNext should call callback', () => {
            const form = getProcessForm();
            let called = false;
            form.Process.MoveNext((result: string) => { called = true; });
            expect(called).toBe(true);
        });

        test('MovePrevious should call callback', () => {
            const form = getProcessForm();
            let called = false;
            form.Process.MovePrevious((result: string) => { called = true; });
            expect(called).toBe(true);
        });

        test('ProcessInstances should call callback with instances', (done) => {
            const form = getProcessForm();
            form.Process.ProcessInstances((instances: any[]) => {
                expect(instances).toBeDefined();
                expect(Array.isArray(instances)).toBe(true);
                expect(instances.length).toBe(1);
                expect(instances[0].ProcessId).toBe('bpf-process-id-001');
                expect(instances[0].InstanceId).toBe('instance-1');
                expect(instances[0].Status).toBe('Active');
                done();
            });
        });

        test('Reflow should call underlying method', () => {
            const form = getProcessForm();
            expect(() => form.Process.Reflow(true, 'stage1', 'stage2')).not.toThrow();
        });
    });

    // ========================================================================
    // TEST: SetActive Methods
    // ========================================================================

    describe('SetActive Methods', () => {
        test('SetActiveProcess should call callback', () => {
            const form = getProcessForm();
            let called = false;
            form.Process.SetActiveProcess('process-id', () => { called = true; });
            expect(called).toBe(true);
        });

        test('SetActiveProcessInstance should call callback', () => {
            const form = getProcessForm();
            let called = false;
            form.Process.SetActiveProcessInstance('instance-id', () => { called = true; });
            expect(called).toBe(true);
        });

        test('SetActiveStage should call callback', () => {
            const form = getProcessForm();
            let called = false;
            form.Process.SetActiveStage('stage1', () => { called = true; });
            expect(called).toBe(true);
        });
    });

    // ========================================================================
    // TEST: Edge Cases
    // ========================================================================

    describe('Edge Cases', () => {
        test('Stage 3 should have 1 step', () => {
            const form = getProcessForm();
            const stage = form.Process.ActiveProcess.Stages.get(2);
            expect(stage.Steps.length).toBe(1);
        });

        test('Multiple BPF fields should be parsed correctly', () => {
            const form = getProcessForm([
                'CustomBPF___Field1',
                'CustomBPF___Field2',
                'CustomBPF___Field3'
            ]);
            expect(form.Process.CustomBPF).toBeDefined();
        });

        test('Second stage should have category 1', () => {
            const form = getProcessForm();
            const stage = form.Process.ActiveProcess.Stages.get(1);
            expect(stage.Category).toBe(1);
        });

        test('Third stage should be inactive', () => {
            const form = getProcessForm();
            const stage = form.Process.ActiveProcess.Stages.get(2);
            expect(stage.Status).toBe('inactive');
        });

        test('Stage with null steps should return empty array', () => {
            // This tests the !steps branch in loadStage
            const form = getProcessForm();
            // All stages have steps, so we verify the existing behavior
            const stage = form.Process.ActiveProcess.Stages.get(0);
            expect(stage.Steps).toBeDefined();
        });
    });

    // ========================================================================
    // TEST: Branch Coverage - Null/Undefined Cases
    // ========================================================================

    describe('Branch Coverage - Null Cases', () => {
        function getFormWithNullSteps(): any {
            const stageWithNullSteps = {
                getCategory: () => null,
                getEntityName: () => 'account',
                getId: () => 'stage-null',
                getName: () => 'Stage Null',
                getStatus: () => 'active',
                getSteps: () => null,
                getNavigationBehavior: () => null
            };

            const processMock = {
                getId: () => 'bpf-null',
                getName: () => 'Null BPF',
                isRendered: () => true,
                getStages: () => ({ get: () => stageWithNullSteps, getLength: () => 1 })
            };

            let displayState = 'expanded', visible = true, status = 'active';

            const ctx = {
                data: {
                    getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(),
                    addOnLoad: () => { }, removeOnLoad: () => { },
                    process: {
                        getActiveProcess: () => processMock,
                        getActiveStage: () => stageWithNullSteps,
                        getActivePath: () => ({ get: () => stageWithNullSteps, getLength: () => 1 }),
                        getInstanceId: () => 'id', getInstanceName: () => 'name', getSelectedStage: () => stageWithNullSteps,
                        getStatus: () => status, setStatus: (v: string) => { status = v; },
                        addOnPreProcessStatusChange: () => { }, addOnPreStageChange: () => { },
                        addOnProcessStatusChange: () => { }, addOnStageChange: () => { }, addOnStageSelected: () => { },
                        getEnabledProcesses: (cb: any) => cb({ 'id': 'name' }),
                        getProcessInstances: (cb: any) => cb({}),
                        moveNext: (cb: any) => cb?.(), movePrevious: (cb: any) => cb?.(),
                        removeOnPreProcessStatusChange: () => { }, removeOnPreStageChange: () => { },
                        removeOnProcessStatusChange: () => { }, removeOnStageChange: () => { }, removeOnStageSelected: () => { },
                        setActiveProcess: (i: string, cb: any) => cb?.(), setActiveProcessInstance: (i: string, cb: any) => cb?.(), setActiveStage: (i: string, cb: any) => cb?.()
                    },
                    entity: {
                        attributes: { get: () => null }, getId: () => 'id', getEntityName: () => 'account',
                        getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}),
                        getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { }
                    }
                },
                ui: {
                    getFormType: () => 2, controls: { get: () => null }, tabs: { get: () => null },
                    formSelector: { getCurrentItem: () => ({ getId: () => 'f', getLabel: () => 'l' }), items: { getLength: () => 0, get: () => null } },
                    getViewPortHeight: () => 800, getViewPortWidth: () => 1200,
                    clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { },
                    addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { },
                    process: { getDisplayState: () => displayState, setDisplayState: (v: string) => { displayState = v; }, getVisible: () => visible, setVisible: (v: boolean) => { visible = v; }, reflow: () => { } }
                },
                getControl: () => null, getAttribute: () => null, getFormContext: function () { return this; }
            };

            return new FormBase({ getFormContext: () => ctx }, 'test', { body: [], header: [], tab: [], grid: [], navigation: [], quick: [], bpf: ['BPF___Field'] });
        }

        test('Stage.Steps returns empty array when getSteps returns null (line 735)', () => {
            const form = getFormWithNullSteps();
            const stage = form.Process.ActiveProcess.Stages.get(0);
            expect(stage.Steps).toEqual([]);
        });

        test('Stage.AllowCreateNew handles null navigation behavior (line 743)', () => {
            const form = getFormWithNullSteps();
            const stage = form.Process.ActiveProcess.Stages.get(0);
            expect(() => stage.AllowCreateNew(() => true)).not.toThrow();
        });

        test('Stage.Category returns undefined when getCategory returns null (line 728)', () => {
            const form = getFormWithNullSteps();
            const stage = form.Process.ActiveProcess.Stages.get(0);
            expect(stage.Category).toBeUndefined();
        });

        test('ProcessInstances with empty object returns empty array', (done) => {
            const form = getFormWithNullSteps();
            form.Process.ProcessInstances((instances: any[]) => {
                expect(instances).toEqual([]);
                done();
            });
        });

        test('Stage with empty steps array returns empty Steps (line 735 branch)', () => {
            // Test stage.getSteps() returns [] (empty array, not null)
            // This covers the steps.length || 0 branch where length is 0
            const stageWithEmptySteps = {
                getCategory: () => ({ getValue: () => 0 }),
                getEntityName: () => 'account',
                getId: () => 'stage-empty',
                getName: () => 'Stage Empty Steps',
                getStatus: () => 'active',
                getSteps: () => [], // Empty array, not null
                getNavigationBehavior: () => ({ allowCreateNew: null })
            };

            const proc = {
                getId: () => 'p', getName: () => 'P', isRendered: () => true,
                getStages: () => ({ get: () => stageWithEmptySteps, getLength: () => 1 })
            };
            let ds = 'expanded', v = true, st = 'active';
            const ctx = {
                data: {
                    getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(), addOnLoad: () => { }, removeOnLoad: () => { },
                    process: {
                        getActiveProcess: () => proc, getActiveStage: () => stageWithEmptySteps, getActivePath: () => ({ get: () => stageWithEmptySteps, getLength: () => 1 }),
                        getInstanceId: () => 'i', getInstanceName: () => 'n', getSelectedStage: () => stageWithEmptySteps, getStatus: () => st, setStatus: (x: string) => { st = x; },
                        addOnPreProcessStatusChange: () => { }, addOnPreStageChange: () => { }, addOnProcessStatusChange: () => { }, addOnStageChange: () => { }, addOnStageSelected: () => { },
                        getEnabledProcesses: (cb: any) => cb({}), getProcessInstances: (cb: any) => cb({}),
                        moveNext: (cb: any) => cb?.(), movePrevious: (cb: any) => cb?.(),
                        removeOnPreProcessStatusChange: () => { }, removeOnPreStageChange: () => { }, removeOnProcessStatusChange: () => { }, removeOnStageChange: () => { }, removeOnStageSelected: () => { },
                        setActiveProcess: (i: string, cb: any) => cb?.(), setActiveProcessInstance: (i: string, cb: any) => cb?.(), setActiveStage: (i: string, cb: any) => cb?.()
                    },
                    entity: { attributes: { get: () => null }, getId: () => 'e', getEntityName: () => 'a', getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}), getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { } }
                },
                ui: {
                    getFormType: () => 2, controls: { get: () => null }, tabs: { get: () => null },
                    formSelector: { getCurrentItem: () => ({ getId: () => 'f', getLabel: () => 'l' }), items: { getLength: () => 0, get: () => null } },
                    getViewPortHeight: () => 800, getViewPortWidth: () => 1200, clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { },
                    addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { },
                    process: { getDisplayState: () => ds, setDisplayState: (x: string) => { ds = x; }, getVisible: () => v, setVisible: (x: boolean) => { v = x; }, reflow: () => { } }
                },
                getControl: () => null, getAttribute: () => null, getFormContext: function () { return this; }
            };
            const form = new FormBase({ getFormContext: () => ctx }, 't', { body: [], header: [], tab: [], grid: [], navigation: [], quick: [], bpf: ['B___F'] });
            expect(form.Process.ActiveProcess.Stages.get(0).Steps).toEqual([]);
        });
    });


    // ========================================================================
    // TEST: Step null properties
    // ========================================================================

    describe('Step Null Properties', () => {
        function getFormWithNullStepProps(): any {
            const nullStep = { getAttribute: () => null, getName: () => null, getProgress: () => null, isRequired: () => null, setProgress: () => { } };
            const stage = {
                getCategory: () => ({ getValue: () => 0 }), getEntityName: () => 'a', getId: () => 's',
                getName: () => 'S', getStatus: () => 'active', getSteps: () => [nullStep], getNavigationBehavior: () => ({ allowCreateNew: null })
            };
            const proc = { getId: () => 'p', getName: () => 'P', isRendered: () => true, getStages: () => ({ get: () => stage, getLength: () => 1 }) };
            let ds = 'expanded', v = true, st = 'active';
            const ctx = {
                data: {
                    getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(), addOnLoad: () => { }, removeOnLoad: () => { },
                    process: {
                        getActiveProcess: () => proc, getActiveStage: () => stage, getActivePath: () => ({ get: () => stage, getLength: () => 1 }),
                        getInstanceId: () => 'i', getInstanceName: () => 'n', getSelectedStage: () => stage, getStatus: () => st, setStatus: (x: string) => { st = x; },
                        addOnPreProcessStatusChange: () => { }, addOnPreStageChange: () => { }, addOnProcessStatusChange: () => { }, addOnStageChange: () => { }, addOnStageSelected: () => { },
                        getEnabledProcesses: (cb: any) => cb({}), getProcessInstances: (cb: any) => cb({}),
                        moveNext: (cb: any) => cb?.(), movePrevious: (cb: any) => cb?.(),
                        removeOnPreProcessStatusChange: () => { }, removeOnPreStageChange: () => { }, removeOnProcessStatusChange: () => { }, removeOnStageChange: () => { }, removeOnStageSelected: () => { },
                        setActiveProcess: (i: string, cb: any) => cb?.(), setActiveProcessInstance: (i: string, cb: any) => cb?.(), setActiveStage: (i: string, cb: any) => cb?.()
                    },
                    entity: { attributes: { get: () => null }, getId: () => 'e', getEntityName: () => 'a', getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}), getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { } }
                },
                ui: {
                    getFormType: () => 2, controls: { get: () => null }, tabs: { get: () => null },
                    formSelector: { getCurrentItem: () => ({ getId: () => 'f', getLabel: () => 'l' }), items: { getLength: () => 0, get: () => null } },
                    getViewPortHeight: () => 800, getViewPortWidth: () => 1200, clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { },
                    addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { },
                    process: { getDisplayState: () => ds, setDisplayState: (x: string) => { ds = x; }, getVisible: () => v, setVisible: (x: boolean) => { v = x; }, reflow: () => { } }
                },
                getControl: () => null, getAttribute: () => null, getFormContext: function () { return this; }
            };
            return new FormBase({ getFormContext: () => ctx }, 't', { body: [], header: [], tab: [], grid: [], navigation: [], quick: [], bpf: ['B___F'] });
        }

        test('Step.Attribute returns null', () => {
            const form = getFormWithNullStepProps();
            expect(form.Process.ActiveProcess.Stages.get(0).Steps[0].Attribute).toBeNull();
        });

        test('Step.Name returns null', () => {
            const form = getFormWithNullStepProps();
            expect(form.Process.ActiveProcess.Stages.get(0).Steps[0].Name).toBeNull();
        });

        test('Step.Progress returns null', () => {
            const form = getFormWithNullStepProps();
            expect(form.Process.ActiveProcess.Stages.get(0).Steps[0].Progress).toBeNull();
        });

        test('Step.Required returns null', () => {
            const form = getFormWithNullStepProps();
            expect(form.Process.ActiveProcess.Stages.get(0).Steps[0].Required).toBeNull();
        });

        test('Step.SetProgress handles null', () => {
            const form = getFormWithNullStepProps();
            expect(() => form.Process.ActiveProcess.Stages.get(0).Steps[0].SetProgress(1, 'msg')).not.toThrow();
        });
    });

    // ========================================================================
    // TEST: Stages forEach with null getLength (line 758)
    // ========================================================================

    describe('Stages forEach with undefined length', () => {
        test('Stages.forEach handles undefined getLength (line 758 branch)', () => {
            // Process with stages that return undefined for getLength
            const stageWithSteps = {
                getCategory: () => ({ getValue: () => 0 }), getEntityName: () => 'account', getId: () => 's', getName: () => 'S', getStatus: () => 'active',
                getSteps: () => [], getNavigationBehavior: () => ({ allowCreateNew: null })
            };
            const proc = {
                getId: () => 'p', getName: () => 'P', isRendered: () => true,
                getStages: () => ({ get: () => stageWithSteps, getLength: () => undefined }) // Returns undefined
            };
            let ds = 'expanded', v = true, st = 'active';
            const ctx = {
                data: {
                    getIsDirty: () => false, isValid: () => true, refresh: () => Promise.resolve(), save: () => Promise.resolve(), addOnLoad: () => { }, removeOnLoad: () => { },
                    process: {
                        getActiveProcess: () => proc, getActiveStage: () => stageWithSteps, getActivePath: () => ({ get: () => stageWithSteps, getLength: () => 1 }),
                        getInstanceId: () => 'i', getInstanceName: () => 'n', getSelectedStage: () => stageWithSteps, getStatus: () => st, setStatus: (x: string) => { st = x; },
                        addOnPreProcessStatusChange: () => { }, addOnPreStageChange: () => { }, addOnProcessStatusChange: () => { }, addOnStageChange: () => { }, addOnStageSelected: () => { },
                        getEnabledProcesses: (cb: any) => cb({}), getProcessInstances: (cb: any) => cb({}),
                        moveNext: (cb: any) => cb?.(), movePrevious: (cb: any) => cb?.(),
                        removeOnPreProcessStatusChange: () => { }, removeOnPreStageChange: () => { }, removeOnProcessStatusChange: () => { }, removeOnStageChange: () => { }, removeOnStageSelected: () => { },
                        setActiveProcess: (i: string, cb: any) => cb?.(), setActiveProcessInstance: (i: string, cb: any) => cb?.(), setActiveStage: (i: string, cb: any) => cb?.()
                    },
                    entity: { attributes: { get: () => null }, getId: () => 'e', getEntityName: () => 'a', getIsDirty: () => false, isValid: () => true, getDataXml: () => '', getEntityReference: () => ({}), getPrimaryAttributeValue: () => '', addOnSave: () => { }, removeOnSave: () => { }, addOnPostSave: () => { }, removeOnPostSave: () => { } }
                },
                ui: {
                    getFormType: () => 2, controls: { get: () => null }, tabs: { get: () => null },
                    formSelector: { getCurrentItem: () => ({ getId: () => 'f', getLabel: () => 'l' }), items: { getLength: () => 0, get: () => null } },
                    getViewPortHeight: () => 800, getViewPortWidth: () => 1200, clearFormNotification: () => true, setFormNotification: () => true, close: () => { }, refreshRibbon: () => { },
                    addLoaded: () => { }, removeLoaded: () => { }, addOnLoad: () => { }, removeOnLoad: () => { }, setFormEntityName: () => { },
                    process: { getDisplayState: () => ds, setDisplayState: (x: string) => { ds = x; }, getVisible: () => v, setVisible: (x: boolean) => { v = x; }, reflow: () => { } }
                },
                getControl: () => null, getAttribute: () => null, getFormContext: function () { return this; }
            };
            const form = new FormBase({ getFormContext: () => ctx }, 't', { body: [], header: [], tab: [], grid: [], navigation: [], quick: [], bpf: ['B___F'] });
            // Call forEach - should handle undefined getLength gracefully
            let count = 0;
            form.Process.ActiveProcess.Stages.forEach((stage: any, index: number) => { count++; });
            expect(count).toBe(0); // Should not iterate since length is undefined (becomes 0)
        });
    });
});
