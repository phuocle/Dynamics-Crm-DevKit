/**
 * Unit Tests for devkit.ts - Process (BPF) Loading
 * Test file: Account.Test09.process.test.ts
 *
 * Coverage targets:
 * - loadProcess() function
 * - Process properties: ActivePath, ActiveProcess, ActiveStage, etc.
 * - Process methods: MoveNext, MovePrevious, SetActiveProcess, etc.
 */
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../lib/devkit';

// Global setup
let mockGlobalContext: any;

describe('devkit.ts - Process (BPF) Loading', () => {
    beforeEach(() => {
        (global as any).window = (global as any).window || {};
        XrmMockGenerator.initialise();
        (global as any).window.Xrm = (global as any).Xrm;

        mockGlobalContext = {
            client: { getClient: () => 'Web', getClientState: () => 'Online', getFormFactor: () => 1, isNetworkAvailable: () => true, isOffline: () => false },
            organizationSettings: { attributes: {}, baseCurrency: { id: 'USD' }, baseCurrencyId: 'usd-guid', defaultCountryCode: 'US', isAutoSaveEnabled: true, languageId: 1033, organizationId: 'org-guid', uniqueName: 'TestOrg', useSkypeProtocol: false },
            userSettings: { dateFormattingInfo: {}, defaultDashboardId: 'dash-guid', isGuidedHelpEnabled: true, isHighContrastEnabled: false, isRTL: false, languageId: 1033, roles: { get: () => [] }, securityRolePrivileges: [], securityRoles: [], getTimeZoneOffsetMinutes: () => -420, transactionCurrency: {}, transactionCurrencyId: 'currency-guid', userId: 'user-guid', userName: 'testuser' },
            getClientUrl: () => 'https://test.crm.dynamics.com',
            getCurrentAppUrl: () => 'https://test.crm.dynamics.com/main.aspx',
            isOnPremises: () => false,
            getVersion: () => '9.2.0.0',
            getCurrentAppName: () => Promise.resolve('Test App'),
            getCurrentAppProperties: () => Promise.resolve({ appId: 'app1' }),
            getAdvancedConfigSetting: () => 10,
            prependOrgName: (path: string) => `/org${path}`,
            getWebResourceUrl: () => '/webresources/test'
        };
        (Xrm.Utility as any).getGlobalContext = () => mockGlobalContext;
        (Xrm as any).WebApi = { createRecord: jest.fn(), deleteRecord: jest.fn(), updateRecord: jest.fn(), retrieveRecord: jest.fn(), retrieveMultipleRecords: jest.fn(), execute: jest.fn(), executeMultiple: jest.fn(), online: { execute: jest.fn(), executeMultiple: jest.fn() }, offline: { isAvailable: jest.fn() } };
        (Xrm as any).Encoding = { htmlAttributeEncode: (a: string) => a, htmlDecode: (a: string) => a, htmlEncode: (a: string) => a, xmlAttributeEncode: (a: string) => a, xmlEncode: (a: string) => a };
        (Xrm as any).Navigation = { navigateTo: () => Promise.resolve(), openAlertDialog: () => Promise.resolve(), openConfirmDialog: () => Promise.resolve({ confirmed: true }), openErrorDialog: () => Promise.resolve(), openForm: () => Promise.resolve({ savedEntityReference: [] }), openFile: () => { }, openUrl: () => { }, openWebResource: () => { } };
        (Xrm as any).App = { addGlobalNotification: () => Promise.resolve('id'), clearGlobalNotification: () => Promise.resolve(), sidePanes: { state: 0, createPane: () => Promise.resolve(), getPane: () => null, getAllPanes: () => [], getSelectedPane: () => null } };
        (Xrm as any).Device = { captureAudio: () => Promise.resolve({}), captureImage: () => Promise.resolve({}), captureVideo: () => Promise.resolve({}), getBarcodeValue: () => Promise.resolve(''), getCurrentPosition: () => Promise.resolve({ coords: {} }), pickFile: () => Promise.resolve([]) };
        (Xrm as any).Panel = { loadPanel: () => { } };
        (Xrm as any).Copilot = { executeEvent: () => Promise.resolve(), executePrompt: () => Promise.resolve() };
        (Xrm.Utility as any).closeProgressIndicator = () => { };
        (Xrm.Utility as any).showProgressIndicator = () => { };
        (Xrm.Utility as any).getLearningPathAttributeName = () => 'lp';
        (Xrm.Utility as any).getPageContext = () => ({});
        (Xrm.Utility as any).getAllowedStatusTransitions = () => Promise.resolve([]);
        (Xrm.Utility as any).getEntityMetadata = () => Promise.resolve({});
        (Xrm.Utility as any).invokeProcessAction = () => Promise.resolve({});
        (Xrm.Utility as any).lookupObjects = () => Promise.resolve([]);
        (Xrm.Utility as any).refreshParentGrid = () => { };
        (Xrm.Utility as any).getResourceString = () => '';
        (Xrm.Utility as any).getEntityMainFormDescriptor = () => ({});
    });

    // Helper: Create mock step
    function createMockStep(name: string, attribute: string, progress: number = 0, required: boolean = true) {
        return {
            getName: () => name,
            getAttribute: () => attribute,
            getProgress: () => progress,
            isRequired: () => required,
            setProgress: jest.fn()
        };
    }

    // Helper: Create mock stage
    function createMockStage(id: string, name: string, entityName: string, status: string, steps: any[] = []) {
        return {
            getId: () => id,
            getName: () => name,
            getEntityName: () => entityName,
            getStatus: () => status,
            getCategory: () => ({ getValue: () => 0 }),
            getSteps: () => steps,
            getNavigationBehavior: () => ({ allowCreateNew: false })
        };
    }

    // Helper: Create mock process
    function createMockProcess(id: string, name: string, isRendered: boolean = true, stages: any[] = []) {
        return {
            getId: () => id,
            getName: () => name,
            isRendered: () => isRendered,
            getStages: () => ({
                getLength: () => stages.length,
                get: (index: number) => stages[index]
            })
        };
    }

    // Helper: Create formContext with BPF process
    function createFormContextWithProcess(processData: any, processUi: any) {
        return {
            data: {
                getIsDirty: () => false,
                isValid: () => true,
                refresh: () => Promise.resolve(),
                save: () => Promise.resolve(),
                addOnLoad: () => { },
                removeOnLoad: () => { },
                entity: {
                    attributes: { get: () => null, getLength: () => 0, forEach: () => { } },
                    getId: () => 'entity-guid',
                    getEntityName: () => 'account',
                    getIsDirty: () => false,
                    isValid: () => true,
                    getDataXml: () => '<data/>',
                    getEntityReference: () => ({ id: 'entity-guid', entityType: 'account' }),
                    getPrimaryAttributeValue: () => 'Test',
                    addOnSave: () => { },
                    removeOnSave: () => { },
                    addOnPostSave: () => { },
                    removeOnPostSave: () => { }
                },
                process: processData
            },
            ui: {
                getFormType: () => 2,
                controls: { get: () => null, getLength: () => 0, forEach: () => { } },
                tabs: { get: () => null, getLength: () => 0, forEach: () => { } },
                formSelector: {
                    getCurrentItem: () => ({ getId: () => 'form-guid', getLabel: () => 'Main Form' }),
                    items: { getLength: () => 0, get: () => null, forEach: () => { } }
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
                process: processUi,
                quickForms: { get: () => null, getLength: () => 0 }
            },
            getControl: (name: string) => {
                // Return header_process_ control for BPF fields
                if (name.startsWith('header_process_')) {
                    const fieldName = name.replace('header_process_', '');
                    return {
                        getName: () => name,
                        getLabel: () => `${fieldName} Label`,
                        getAttribute: () => ({
                            getName: () => fieldName,
                            getValue: () => 'Test Value'
                        })
                    };
                }
                return null;
            },
            getAttribute: (name: string) => {
                if (name.startsWith('header_process_')) {
                    const fieldName = name.replace('header_process_', '');
                    return {
                        getName: () => fieldName,
                        getValue: () => 'Test Value',
                        getAttributeType: () => 'string'
                    };
                }
                return null;
            },
            getFormContext: function () { return this; }
        };
    }

    describe('loadProcess', () => {
        test('should load BPF process when bpf config provided', () => {
            const steps = [createMockStep('Step 1', 'step1attr')];
            const stage1 = createMockStage('stage-1', 'Qualify', 'lead', 'active', steps);
            const stage2 = createMockStage('stage-2', 'Develop', 'opportunity', 'inactive', []);
            const mockProcess = createMockProcess('process-1', 'Lead to Opportunity', true, [stage1, stage2]);

            const processData = {
                getActiveProcess: () => mockProcess,
                getActiveStage: () => stage1,
                getSelectedStage: () => stage1,
                getActivePath: () => ({
                    getLength: () => 2,
                    get: (index: number) => [stage1, stage2][index]
                }),
                getInstanceId: () => 'instance-guid',
                getInstanceName: () => 'Process Instance',
                getStatus: () => 'Active',
                setStatus: jest.fn(),
                addOnPreProcessStatusChange: jest.fn(),
                addOnPreStageChange: jest.fn(),
                addOnProcessStatusChange: jest.fn(),
                addOnStageChange: jest.fn(),
                addOnStageSelected: jest.fn(),
                removeOnPreProcessStatusChange: jest.fn(),
                removeOnPreStageChange: jest.fn(),
                removeOnProcessStatusChange: jest.fn(),
                removeOnStageChange: jest.fn(),
                removeOnStageSelected: jest.fn(),
                setActiveProcess: jest.fn(),
                setActiveProcessInstance: jest.fn(),
                setActiveStage: jest.fn(),
                moveNext: jest.fn(),
                movePrevious: jest.fn(),
                getEnabledProcesses: jest.fn((callback: any) => callback({ 'proc-1': 'Process 1', 'proc-2': 'Process 2' })),
                getProcessInstances: jest.fn((callback: any) => callback([{
                    ProcessDefinitionID: 'proc-1',
                    ProcessDefinitionName: 'Process 1',
                    CreatedOn: '2023-01-01',
                    CreatedOnDate: new Date(),
                    ProcessInstanceID: 'inst-1',
                    ProcessInstanceName: 'Instance 1',
                    StatusCodeName: 'Active'
                }]))
            };

            const processUi = {
                getDisplayState: () => 'expanded',
                setDisplayState: jest.fn(),
                getVisible: () => true,
                setVisible: jest.fn(),
                reflow: jest.fn()
            };

            const formContext = createFormContextWithProcess(processData, processUi);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                body: [],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: [],
                bpf: ['LeadToOpportunity___step1field', 'LeadToOpportunity___step2field']
            });

            expect(form.Process).toBeDefined();
            expect(form.Process.LeadToOpportunity).toBeDefined();
        });

        test('should return InstanceId property', () => {
            const processData = {
                getActiveProcess: () => null,
                getActiveStage: () => null,
                getSelectedStage: () => null,
                getActivePath: () => ({ getLength: () => 0, get: () => null }),
                getInstanceId: () => 'instance-guid-123',
                getInstanceName: () => 'Test Instance',
                getStatus: () => 'Active',
                setStatus: jest.fn(),
                addOnPreProcessStatusChange: jest.fn(),
                addOnPreStageChange: jest.fn(),
                addOnProcessStatusChange: jest.fn(),
                addOnStageChange: jest.fn(),
                addOnStageSelected: jest.fn(),
                removeOnPreProcessStatusChange: jest.fn(),
                removeOnPreStageChange: jest.fn(),
                removeOnProcessStatusChange: jest.fn(),
                removeOnStageChange: jest.fn(),
                removeOnStageSelected: jest.fn(),
                setActiveProcess: jest.fn(),
                setActiveProcessInstance: jest.fn(),
                setActiveStage: jest.fn(),
                moveNext: jest.fn(),
                movePrevious: jest.fn(),
                getEnabledProcesses: jest.fn(),
                getProcessInstances: jest.fn()
            };

            const processUi = {
                getDisplayState: () => 'expanded',
                setDisplayState: jest.fn(),
                getVisible: () => true,
                setVisible: jest.fn(),
                reflow: jest.fn()
            };

            const formContext = createFormContextWithProcess(processData, processUi);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                bpf: ['TestBPF___field1']
            });

            expect(form.Process.InstanceId).toBe('instance-guid-123');
            expect(form.Process.InstanceName).toBe('Test Instance');
        });

        test('should handle DisplayState getter and setter', () => {
            const processData = {
                getActiveProcess: () => null,
                getActiveStage: () => null,
                getSelectedStage: () => null,
                getActivePath: () => ({ getLength: () => 0, get: () => null }),
                getInstanceId: () => 'guid',
                getInstanceName: () => 'Instance',
                getStatus: () => 'Active',
                setStatus: jest.fn(),
                addOnPreProcessStatusChange: jest.fn(),
                addOnPreStageChange: jest.fn(),
                addOnProcessStatusChange: jest.fn(),
                addOnStageChange: jest.fn(),
                addOnStageSelected: jest.fn(),
                removeOnPreProcessStatusChange: jest.fn(),
                removeOnPreStageChange: jest.fn(),
                removeOnProcessStatusChange: jest.fn(),
                removeOnStageChange: jest.fn(),
                removeOnStageSelected: jest.fn(),
                setActiveProcess: jest.fn(),
                setActiveProcessInstance: jest.fn(),
                setActiveStage: jest.fn(),
                moveNext: jest.fn(),
                movePrevious: jest.fn(),
                getEnabledProcesses: jest.fn(),
                getProcessInstances: jest.fn()
            };

            const processUi = {
                getDisplayState: () => 'expanded',
                setDisplayState: jest.fn(),
                getVisible: () => true,
                setVisible: jest.fn(),
                reflow: jest.fn()
            };

            const formContext = createFormContextWithProcess(processData, processUi);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                bpf: ['TestBPF___field1']
            });

            expect(form.Process.DisplayState).toBe('expanded');
            form.Process.DisplayState = 'collapsed';
            expect(processUi.setDisplayState).toHaveBeenCalledWith('collapsed');
        });

        test('should handle Status getter and setter', () => {
            const processData = {
                getActiveProcess: () => null,
                getActiveStage: () => null,
                getSelectedStage: () => null,
                getActivePath: () => ({ getLength: () => 0, get: () => null }),
                getInstanceId: () => 'guid',
                getInstanceName: () => 'Instance',
                getStatus: () => 'Active',
                setStatus: jest.fn(),
                addOnPreProcessStatusChange: jest.fn(),
                addOnPreStageChange: jest.fn(),
                addOnProcessStatusChange: jest.fn(),
                addOnStageChange: jest.fn(),
                addOnStageSelected: jest.fn(),
                removeOnPreProcessStatusChange: jest.fn(),
                removeOnPreStageChange: jest.fn(),
                removeOnProcessStatusChange: jest.fn(),
                removeOnStageChange: jest.fn(),
                removeOnStageSelected: jest.fn(),
                setActiveProcess: jest.fn(),
                setActiveProcessInstance: jest.fn(),
                setActiveStage: jest.fn(),
                moveNext: jest.fn(),
                movePrevious: jest.fn(),
                getEnabledProcesses: jest.fn(),
                getProcessInstances: jest.fn()
            };

            const processUi = {
                getDisplayState: () => 'expanded',
                setDisplayState: jest.fn(),
                getVisible: () => true,
                setVisible: jest.fn(),
                reflow: jest.fn()
            };

            const formContext = createFormContextWithProcess(processData, processUi);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                bpf: ['TestBPF___field1']
            });

            expect(form.Process.Status).toBe('Active');
            form.Process.Status = 'Finished';
            expect(processData.setStatus).toHaveBeenCalledWith('Finished');
        });

        test('should handle Visible getter and setter', () => {
            const processData = {
                getActiveProcess: () => null,
                getActiveStage: () => null,
                getSelectedStage: () => null,
                getActivePath: () => ({ getLength: () => 0, get: () => null }),
                getInstanceId: () => 'guid',
                getInstanceName: () => 'Instance',
                getStatus: () => 'Active',
                setStatus: jest.fn(),
                addOnPreProcessStatusChange: jest.fn(),
                addOnPreStageChange: jest.fn(),
                addOnProcessStatusChange: jest.fn(),
                addOnStageChange: jest.fn(),
                addOnStageSelected: jest.fn(),
                removeOnPreProcessStatusChange: jest.fn(),
                removeOnPreStageChange: jest.fn(),
                removeOnProcessStatusChange: jest.fn(),
                removeOnStageChange: jest.fn(),
                removeOnStageSelected: jest.fn(),
                setActiveProcess: jest.fn(),
                setActiveProcessInstance: jest.fn(),
                setActiveStage: jest.fn(),
                moveNext: jest.fn(),
                movePrevious: jest.fn(),
                getEnabledProcesses: jest.fn(),
                getProcessInstances: jest.fn()
            };

            const processUi = {
                getDisplayState: () => 'expanded',
                setDisplayState: jest.fn(),
                getVisible: () => true,
                setVisible: jest.fn(),
                reflow: jest.fn()
            };

            const formContext = createFormContextWithProcess(processData, processUi);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                bpf: ['TestBPF___field1']
            });

            expect(form.Process.Visible).toBe(true);
            form.Process.Visible = false;
            expect(processUi.setVisible).toHaveBeenCalledWith(false);
        });

        test('should call MoveNext method', () => {
            const processData = {
                getActiveProcess: () => null,
                getActiveStage: () => null,
                getSelectedStage: () => null,
                getActivePath: () => ({ getLength: () => 0, get: () => null }),
                getInstanceId: () => 'guid',
                getInstanceName: () => 'Instance',
                getStatus: () => 'Active',
                setStatus: jest.fn(),
                addOnPreProcessStatusChange: jest.fn(),
                addOnPreStageChange: jest.fn(),
                addOnProcessStatusChange: jest.fn(),
                addOnStageChange: jest.fn(),
                addOnStageSelected: jest.fn(),
                removeOnPreProcessStatusChange: jest.fn(),
                removeOnPreStageChange: jest.fn(),
                removeOnProcessStatusChange: jest.fn(),
                removeOnStageChange: jest.fn(),
                removeOnStageSelected: jest.fn(),
                setActiveProcess: jest.fn(),
                setActiveProcessInstance: jest.fn(),
                setActiveStage: jest.fn(),
                moveNext: jest.fn(),
                movePrevious: jest.fn(),
                getEnabledProcesses: jest.fn(),
                getProcessInstances: jest.fn()
            };

            const processUi = {
                getDisplayState: () => 'expanded',
                setDisplayState: jest.fn(),
                getVisible: () => true,
                setVisible: jest.fn(),
                reflow: jest.fn()
            };

            const formContext = createFormContextWithProcess(processData, processUi);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                bpf: ['TestBPF___field1']
            });

            const callback = jest.fn();
            form.Process.MoveNext(callback);
            expect(processData.moveNext).toHaveBeenCalledWith(callback);
        });

        test('should call MovePrevious method', () => {
            const processData = {
                getActiveProcess: () => null,
                getActiveStage: () => null,
                getSelectedStage: () => null,
                getActivePath: () => ({ getLength: () => 0, get: () => null }),
                getInstanceId: () => 'guid',
                getInstanceName: () => 'Instance',
                getStatus: () => 'Active',
                setStatus: jest.fn(),
                addOnPreProcessStatusChange: jest.fn(),
                addOnPreStageChange: jest.fn(),
                addOnProcessStatusChange: jest.fn(),
                addOnStageChange: jest.fn(),
                addOnStageSelected: jest.fn(),
                removeOnPreProcessStatusChange: jest.fn(),
                removeOnPreStageChange: jest.fn(),
                removeOnProcessStatusChange: jest.fn(),
                removeOnStageChange: jest.fn(),
                removeOnStageSelected: jest.fn(),
                setActiveProcess: jest.fn(),
                setActiveProcessInstance: jest.fn(),
                setActiveStage: jest.fn(),
                moveNext: jest.fn(),
                movePrevious: jest.fn(),
                getEnabledProcesses: jest.fn(),
                getProcessInstances: jest.fn()
            };

            const processUi = {
                getDisplayState: () => 'expanded',
                setDisplayState: jest.fn(),
                getVisible: () => true,
                setVisible: jest.fn(),
                reflow: jest.fn()
            };

            const formContext = createFormContextWithProcess(processData, processUi);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                bpf: ['TestBPF___field1']
            });

            const callback = jest.fn();
            form.Process.MovePrevious(callback);
            expect(processData.movePrevious).toHaveBeenCalledWith(callback);
        });

        test('should call SetActiveProcess method', () => {
            const processData = {
                getActiveProcess: () => null,
                getActiveStage: () => null,
                getSelectedStage: () => null,
                getActivePath: () => ({ getLength: () => 0, get: () => null }),
                getInstanceId: () => 'guid',
                getInstanceName: () => 'Instance',
                getStatus: () => 'Active',
                setStatus: jest.fn(),
                addOnPreProcessStatusChange: jest.fn(),
                addOnPreStageChange: jest.fn(),
                addOnProcessStatusChange: jest.fn(),
                addOnStageChange: jest.fn(),
                addOnStageSelected: jest.fn(),
                removeOnPreProcessStatusChange: jest.fn(),
                removeOnPreStageChange: jest.fn(),
                removeOnProcessStatusChange: jest.fn(),
                removeOnStageChange: jest.fn(),
                removeOnStageSelected: jest.fn(),
                setActiveProcess: jest.fn(),
                setActiveProcessInstance: jest.fn(),
                setActiveStage: jest.fn(),
                moveNext: jest.fn(),
                movePrevious: jest.fn(),
                getEnabledProcesses: jest.fn(),
                getProcessInstances: jest.fn()
            };

            const processUi = {
                getDisplayState: () => 'expanded',
                setDisplayState: jest.fn(),
                getVisible: () => true,
                setVisible: jest.fn(),
                reflow: jest.fn()
            };

            const formContext = createFormContextWithProcess(processData, processUi);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                bpf: ['TestBPF___field1']
            });

            const callback = jest.fn();
            form.Process.SetActiveProcess('process-id', callback);
            expect(processData.setActiveProcess).toHaveBeenCalledWith('process-id', callback);
        });

        test('should call SetActiveProcessInstance method', () => {
            const processData = {
                getActiveProcess: () => null,
                getActiveStage: () => null,
                getSelectedStage: () => null,
                getActivePath: () => ({ getLength: () => 0, get: () => null }),
                getInstanceId: () => 'guid',
                getInstanceName: () => 'Instance',
                getStatus: () => 'Active',
                setStatus: jest.fn(),
                addOnPreProcessStatusChange: jest.fn(),
                addOnPreStageChange: jest.fn(),
                addOnProcessStatusChange: jest.fn(),
                addOnStageChange: jest.fn(),
                addOnStageSelected: jest.fn(),
                removeOnPreProcessStatusChange: jest.fn(),
                removeOnPreStageChange: jest.fn(),
                removeOnProcessStatusChange: jest.fn(),
                removeOnStageChange: jest.fn(),
                removeOnStageSelected: jest.fn(),
                setActiveProcess: jest.fn(),
                setActiveProcessInstance: jest.fn(),
                setActiveStage: jest.fn(),
                moveNext: jest.fn(),
                movePrevious: jest.fn(),
                getEnabledProcesses: jest.fn(),
                getProcessInstances: jest.fn()
            };

            const processUi = {
                getDisplayState: () => 'expanded',
                setDisplayState: jest.fn(),
                getVisible: () => true,
                setVisible: jest.fn(),
                reflow: jest.fn()
            };

            const formContext = createFormContextWithProcess(processData, processUi);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                bpf: ['TestBPF___field1']
            });

            const callback = jest.fn();
            form.Process.SetActiveProcessInstance('instance-id', callback);
            expect(processData.setActiveProcessInstance).toHaveBeenCalledWith('instance-id', callback);
        });

        test('should call SetActiveStage method', () => {
            const processData = {
                getActiveProcess: () => null,
                getActiveStage: () => null,
                getSelectedStage: () => null,
                getActivePath: () => ({ getLength: () => 0, get: () => null }),
                getInstanceId: () => 'guid',
                getInstanceName: () => 'Instance',
                getStatus: () => 'Active',
                setStatus: jest.fn(),
                addOnPreProcessStatusChange: jest.fn(),
                addOnPreStageChange: jest.fn(),
                addOnProcessStatusChange: jest.fn(),
                addOnStageChange: jest.fn(),
                addOnStageSelected: jest.fn(),
                removeOnPreProcessStatusChange: jest.fn(),
                removeOnPreStageChange: jest.fn(),
                removeOnProcessStatusChange: jest.fn(),
                removeOnStageChange: jest.fn(),
                removeOnStageSelected: jest.fn(),
                setActiveProcess: jest.fn(),
                setActiveProcessInstance: jest.fn(),
                setActiveStage: jest.fn(),
                moveNext: jest.fn(),
                movePrevious: jest.fn(),
                getEnabledProcesses: jest.fn(),
                getProcessInstances: jest.fn()
            };

            const processUi = {
                getDisplayState: () => 'expanded',
                setDisplayState: jest.fn(),
                getVisible: () => true,
                setVisible: jest.fn(),
                reflow: jest.fn()
            };

            const formContext = createFormContextWithProcess(processData, processUi);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                bpf: ['TestBPF___field1']
            });

            const callback = jest.fn();
            form.Process.SetActiveStage('stage-id', callback);
            expect(processData.setActiveStage).toHaveBeenCalledWith('stage-id', callback);
        });

        test('should call process event handler methods', () => {
            const processData = {
                getActiveProcess: () => null,
                getActiveStage: () => null,
                getSelectedStage: () => null,
                getActivePath: () => ({ getLength: () => 0, get: () => null }),
                getInstanceId: () => 'guid',
                getInstanceName: () => 'Instance',
                getStatus: () => 'Active',
                setStatus: jest.fn(),
                addOnPreProcessStatusChange: jest.fn(),
                addOnPreStageChange: jest.fn(),
                addOnProcessStatusChange: jest.fn(),
                addOnStageChange: jest.fn(),
                addOnStageSelected: jest.fn(),
                removeOnPreProcessStatusChange: jest.fn(),
                removeOnPreStageChange: jest.fn(),
                removeOnProcessStatusChange: jest.fn(),
                removeOnStageChange: jest.fn(),
                removeOnStageSelected: jest.fn(),
                setActiveProcess: jest.fn(),
                setActiveProcessInstance: jest.fn(),
                setActiveStage: jest.fn(),
                moveNext: jest.fn(),
                movePrevious: jest.fn(),
                getEnabledProcesses: jest.fn(),
                getProcessInstances: jest.fn()
            };

            const processUi = {
                getDisplayState: () => 'expanded',
                setDisplayState: jest.fn(),
                getVisible: () => true,
                setVisible: jest.fn(),
                reflow: jest.fn()
            };

            const formContext = createFormContextWithProcess(processData, processUi);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                bpf: ['TestBPF___field1']
            });

            const callback = jest.fn();

            form.Process.AddOnPreProcessStatusChange(callback);
            expect(processData.addOnPreProcessStatusChange).toHaveBeenCalledWith(callback);

            form.Process.AddOnPreStageChange(callback);
            expect(processData.addOnPreStageChange).toHaveBeenCalledWith(callback);

            form.Process.AddOnProcessStatusChange(callback);
            expect(processData.addOnProcessStatusChange).toHaveBeenCalledWith(callback);

            form.Process.AddOnStageChange(callback);
            expect(processData.addOnStageChange).toHaveBeenCalledWith(callback);

            form.Process.AddOnStageSelected(callback);
            expect(processData.addOnStageSelected).toHaveBeenCalledWith(callback);

            form.Process.RemoveOnPreProcessStatusChange(callback);
            expect(processData.removeOnPreProcessStatusChange).toHaveBeenCalledWith(callback);

            form.Process.RemoveOnPreStageChange(callback);
            expect(processData.removeOnPreStageChange).toHaveBeenCalledWith(callback);

            form.Process.RemoveOnProcessStatusChange(callback);
            expect(processData.removeOnProcessStatusChange).toHaveBeenCalledWith(callback);

            form.Process.RemoveOnStageChange(callback);
            expect(processData.removeOnStageChange).toHaveBeenCalledWith(callback);

            form.Process.RemoveOnStageSelected(callback);
            expect(processData.removeOnStageSelected).toHaveBeenCalledWith(callback);
        });

        test('should call Reflow method', () => {
            const processData = {
                getActiveProcess: () => null,
                getActiveStage: () => null,
                getSelectedStage: () => null,
                getActivePath: () => ({ getLength: () => 0, get: () => null }),
                getInstanceId: () => 'guid',
                getInstanceName: () => 'Instance',
                getStatus: () => 'Active',
                setStatus: jest.fn(),
                addOnPreProcessStatusChange: jest.fn(),
                addOnPreStageChange: jest.fn(),
                addOnProcessStatusChange: jest.fn(),
                addOnStageChange: jest.fn(),
                addOnStageSelected: jest.fn(),
                removeOnPreProcessStatusChange: jest.fn(),
                removeOnPreStageChange: jest.fn(),
                removeOnProcessStatusChange: jest.fn(),
                removeOnStageChange: jest.fn(),
                removeOnStageSelected: jest.fn(),
                setActiveProcess: jest.fn(),
                setActiveProcessInstance: jest.fn(),
                setActiveStage: jest.fn(),
                moveNext: jest.fn(),
                movePrevious: jest.fn(),
                getEnabledProcesses: jest.fn(),
                getProcessInstances: jest.fn()
            };

            const processUi = {
                getDisplayState: () => 'expanded',
                setDisplayState: jest.fn(),
                getVisible: () => true,
                setVisible: jest.fn(),
                reflow: jest.fn()
            };

            const formContext = createFormContextWithProcess(processData, processUi);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                bpf: ['TestBPF___field1']
            });

            form.Process.Reflow(true, 'stage1', 'stage2');
            expect(processUi.reflow).toHaveBeenCalledWith(true, 'stage1', 'stage2');
        });

        test('should call EnabledProcesses callback with mapped data', () => {
            const processData = {
                getActiveProcess: () => null,
                getActiveStage: () => null,
                getSelectedStage: () => null,
                getActivePath: () => ({ getLength: () => 0, get: () => null }),
                getInstanceId: () => 'guid',
                getInstanceName: () => 'Instance',
                getStatus: () => 'Active',
                setStatus: jest.fn(),
                addOnPreProcessStatusChange: jest.fn(),
                addOnPreStageChange: jest.fn(),
                addOnProcessStatusChange: jest.fn(),
                addOnStageChange: jest.fn(),
                addOnStageSelected: jest.fn(),
                removeOnPreProcessStatusChange: jest.fn(),
                removeOnPreStageChange: jest.fn(),
                removeOnProcessStatusChange: jest.fn(),
                removeOnStageChange: jest.fn(),
                removeOnStageSelected: jest.fn(),
                setActiveProcess: jest.fn(),
                setActiveProcessInstance: jest.fn(),
                setActiveStage: jest.fn(),
                moveNext: jest.fn(),
                movePrevious: jest.fn(),
                getEnabledProcesses: jest.fn((callback: any) => callback({ 'proc-1': 'Process 1', 'proc-2': 'Process 2' })),
                getProcessInstances: jest.fn()
            };

            const processUi = {
                getDisplayState: () => 'expanded',
                setDisplayState: jest.fn(),
                getVisible: () => true,
                setVisible: jest.fn(),
                reflow: jest.fn()
            };

            const formContext = createFormContextWithProcess(processData, processUi);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                bpf: ['TestBPF___field1']
            });

            const callback = jest.fn();
            form.Process.EnabledProcesses(callback);

            expect(callback).toHaveBeenCalledWith([
                { ProcessId: 'proc-1', ProcessName: 'Process 1' },
                { ProcessId: 'proc-2', ProcessName: 'Process 2' }
            ]);
        });

        test('should call ProcessInstances callback with mapped data', () => {
            const processData = {
                getActiveProcess: () => null,
                getActiveStage: () => null,
                getSelectedStage: () => null,
                getActivePath: () => ({ getLength: () => 0, get: () => null }),
                getInstanceId: () => 'guid',
                getInstanceName: () => 'Instance',
                getStatus: () => 'Active',
                setStatus: jest.fn(),
                addOnPreProcessStatusChange: jest.fn(),
                addOnPreStageChange: jest.fn(),
                addOnProcessStatusChange: jest.fn(),
                addOnStageChange: jest.fn(),
                addOnStageSelected: jest.fn(),
                removeOnPreProcessStatusChange: jest.fn(),
                removeOnPreStageChange: jest.fn(),
                removeOnProcessStatusChange: jest.fn(),
                removeOnStageChange: jest.fn(),
                removeOnStageSelected: jest.fn(),
                setActiveProcess: jest.fn(),
                setActiveProcessInstance: jest.fn(),
                setActiveStage: jest.fn(),
                moveNext: jest.fn(),
                movePrevious: jest.fn(),
                getEnabledProcesses: jest.fn(),
                getProcessInstances: jest.fn((callback: any) => callback([{
                    ProcessDefinitionID: 'proc-1',
                    ProcessDefinitionName: 'Process 1',
                    CreatedOn: '2023-01-01',
                    CreatedOnDate: new Date('2023-01-01'),
                    ProcessInstanceID: 'inst-1',
                    ProcessInstanceName: 'Instance 1',
                    StatusCodeName: 'Active'
                }]))
            };

            const processUi = {
                getDisplayState: () => 'expanded',
                setDisplayState: jest.fn(),
                getVisible: () => true,
                setVisible: jest.fn(),
                reflow: jest.fn()
            };

            const formContext = createFormContextWithProcess(processData, processUi);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                bpf: ['TestBPF___field1']
            });

            const callback = jest.fn();
            form.Process.ProcessInstances(callback);

            expect(callback).toHaveBeenCalledWith([{
                ProcessId: 'proc-1',
                ProcessName: 'Process 1',
                CreatedOn: '2023-01-01',
                CreatedOnDate: expect.any(Date),
                InstanceId: 'inst-1',
                InstanceName: 'Instance 1',
                Status: 'Active'
            }]);
        });

        test('should return ActiveProcess with properties', () => {
            const stage1 = createMockStage('stage-1', 'Qualify', 'lead', 'active', []);
            const mockProcess = createMockProcess('process-1', 'Lead to Opportunity', true, [stage1]);

            const processData = {
                getActiveProcess: () => mockProcess,
                getActiveStage: () => stage1,
                getSelectedStage: () => stage1,
                getActivePath: () => ({
                    getLength: () => 1,
                    get: (index: number) => stage1
                }),
                getInstanceId: () => 'guid',
                getInstanceName: () => 'Instance',
                getStatus: () => 'Active',
                setStatus: jest.fn(),
                addOnPreProcessStatusChange: jest.fn(),
                addOnPreStageChange: jest.fn(),
                addOnProcessStatusChange: jest.fn(),
                addOnStageChange: jest.fn(),
                addOnStageSelected: jest.fn(),
                removeOnPreProcessStatusChange: jest.fn(),
                removeOnPreStageChange: jest.fn(),
                removeOnProcessStatusChange: jest.fn(),
                removeOnStageChange: jest.fn(),
                removeOnStageSelected: jest.fn(),
                setActiveProcess: jest.fn(),
                setActiveProcessInstance: jest.fn(),
                setActiveStage: jest.fn(),
                moveNext: jest.fn(),
                movePrevious: jest.fn(),
                getEnabledProcesses: jest.fn(),
                getProcessInstances: jest.fn()
            };

            const processUi = {
                getDisplayState: () => 'expanded',
                setDisplayState: jest.fn(),
                getVisible: () => true,
                setVisible: jest.fn(),
                reflow: jest.fn()
            };

            const formContext = createFormContextWithProcess(processData, processUi);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                bpf: ['TestBPF___field1']
            });

            const activeProcess = form.Process.ActiveProcess;
            expect(activeProcess.Id).toBe('process-1');
            expect(activeProcess.Name).toBe('Lead to Opportunity');
            expect(activeProcess.IsRendered).toBe(true);
            expect(activeProcess.Stages.getLength()).toBe(1);
        });

        test('should return ActiveStage with properties', () => {
            const steps = [createMockStep('Step 1', 'step1attr', 0, true)];
            const stage1 = createMockStage('stage-1', 'Qualify', 'lead', 'active', steps);

            const processData = {
                getActiveProcess: () => null,
                getActiveStage: () => stage1,
                getSelectedStage: () => stage1,
                getActivePath: () => ({
                    getLength: () => 1,
                    get: () => stage1
                }),
                getInstanceId: () => 'guid',
                getInstanceName: () => 'Instance',
                getStatus: () => 'Active',
                setStatus: jest.fn(),
                addOnPreProcessStatusChange: jest.fn(),
                addOnPreStageChange: jest.fn(),
                addOnProcessStatusChange: jest.fn(),
                addOnStageChange: jest.fn(),
                addOnStageSelected: jest.fn(),
                removeOnPreProcessStatusChange: jest.fn(),
                removeOnPreStageChange: jest.fn(),
                removeOnProcessStatusChange: jest.fn(),
                removeOnStageChange: jest.fn(),
                removeOnStageSelected: jest.fn(),
                setActiveProcess: jest.fn(),
                setActiveProcessInstance: jest.fn(),
                setActiveStage: jest.fn(),
                moveNext: jest.fn(),
                movePrevious: jest.fn(),
                getEnabledProcesses: jest.fn(),
                getProcessInstances: jest.fn()
            };

            const processUi = {
                getDisplayState: () => 'expanded',
                setDisplayState: jest.fn(),
                getVisible: () => true,
                setVisible: jest.fn(),
                reflow: jest.fn()
            };

            const formContext = createFormContextWithProcess(processData, processUi);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                bpf: ['TestBPF___field1']
            });

            const activeStage = form.Process.ActiveStage;
            expect(activeStage.Id).toBe('stage-1');
            expect(activeStage.Name).toBe('Qualify');
            expect(activeStage.EntityName).toBe('lead');
            expect(activeStage.Status).toBe('active');
            expect(activeStage.Category).toBe(0);

            const stageSteps = activeStage.Steps;
            expect(stageSteps).toHaveLength(1);
            expect(stageSteps[0].Name).toBe('Step 1');
            expect(stageSteps[0].Attribute).toBe('step1attr');
            expect(stageSteps[0].Progress).toBe(0);
            expect(stageSteps[0].Required).toBe(true);
        });

        test('should return ActivePath with iteration', () => {
            const stage1 = createMockStage('stage-1', 'Stage 1', 'account', 'active', []);
            const stage2 = createMockStage('stage-2', 'Stage 2', 'account', 'inactive', []);

            const processData = {
                getActiveProcess: () => null,
                getActiveStage: () => stage1,
                getSelectedStage: () => stage1,
                getActivePath: () => ({
                    getLength: () => 2,
                    get: (index: number) => [stage1, stage2][index]
                }),
                getInstanceId: () => 'guid',
                getInstanceName: () => 'Instance',
                getStatus: () => 'Active',
                setStatus: jest.fn(),
                addOnPreProcessStatusChange: jest.fn(),
                addOnPreStageChange: jest.fn(),
                addOnProcessStatusChange: jest.fn(),
                addOnStageChange: jest.fn(),
                addOnStageSelected: jest.fn(),
                removeOnPreProcessStatusChange: jest.fn(),
                removeOnPreStageChange: jest.fn(),
                removeOnProcessStatusChange: jest.fn(),
                removeOnStageChange: jest.fn(),
                removeOnStageSelected: jest.fn(),
                setActiveProcess: jest.fn(),
                setActiveProcessInstance: jest.fn(),
                setActiveStage: jest.fn(),
                moveNext: jest.fn(),
                movePrevious: jest.fn(),
                getEnabledProcesses: jest.fn(),
                getProcessInstances: jest.fn()
            };

            const processUi = {
                getDisplayState: () => 'expanded',
                setDisplayState: jest.fn(),
                getVisible: () => true,
                setVisible: jest.fn(),
                reflow: jest.fn()
            };

            const formContext = createFormContextWithProcess(processData, processUi);
            const executionContext = { getFormContext: () => formContext };

            const form = new FormBase(executionContext, 'test', {
                bpf: ['TestBPF___field1']
            });

            const activePath = form.Process.ActivePath;
            expect(activePath.getLength()).toBe(2);
            expect(activePath.get(0).Id).toBe('stage-1');
            expect(activePath.get(1).Id).toBe('stage-2');

            // Test forEach
            const collected: string[] = [];
            activePath.forEach((stage: any) => {
                collected.push(stage.Id);
            });
            expect(collected).toEqual(['stage-1', 'stage-2']);
        });
    });
});
