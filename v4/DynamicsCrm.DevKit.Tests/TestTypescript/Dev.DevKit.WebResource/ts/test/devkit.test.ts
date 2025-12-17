/**
 * DevKit.ts Unit Tests
 * Using xrm-mock for mocking Xrm API
 */
import { XrmMockGenerator } from 'xrm-mock';
import {
    LoadFormV2,
    LoadProcess,
    LoadUtility,
    LoadSidePanes,
    LoadFormDialog,
    OptionSet
} from '../lib/devkit';

describe('DevKit Module', () => {
    beforeEach(() => {
        // Initialize xrm-mock before each test
        XrmMockGenerator.initialise();
    });

    afterEach(() => {
        // Clean up after each test
        jest.clearAllMocks();
    });

    // =========================================================================
    // OptionSet Constants Tests
    // =========================================================================
    describe('OptionSet namespace', () => {
        test('AdvancedConfigSetting should have correct values', () => {
            expect(OptionSet.AdvancedConfigSetting.MaxChildIncidentNumber).toBe('MaxChildIncidentNumber');
            expect(OptionSet.AdvancedConfigSetting.MaxIncidentMergeNumber).toBe('MaxIncidentMergeNumber');
        });

        test('ClientName should have correct values', () => {
            expect(OptionSet.ClientName.Web).toBe('Web');
            expect(OptionSet.ClientName.Outlook).toBe('Outlook');
            expect(OptionSet.ClientName.Mobile).toBe('Mobile');
        });

        test('ClientState should have correct values', () => {
            expect(OptionSet.ClientState.Online).toBe('Online');
            expect(OptionSet.ClientState.Offline).toBe('Offline');
        });

        test('FieldAttributeType should have correct values', () => {
            expect(OptionSet.FieldAttributeType.Boolean).toBe('boolean');
            expect(OptionSet.FieldAttributeType.String).toBe('string');
            expect(OptionSet.FieldAttributeType.Lookup).toBe('lookup');
            expect(OptionSet.FieldAttributeType.OptionSet).toBe('optionset');
        });

        test('FieldControlType should have correct values', () => {
            expect(OptionSet.FieldControlType.Standard).toBe('standard');
            expect(OptionSet.FieldControlType.Lookup).toBe('lookup');
            expect(OptionSet.FieldControlType.SubGrid).toBe('subgrid');
        });

        test('FormType should have correct values', () => {
            expect(OptionSet.FormType.Undefined).toBe(0);
            expect(OptionSet.FormType.Create).toBe(1);
            expect(OptionSet.FormType.Update).toBe(2);
            expect(OptionSet.FormType.ReadOnly).toBe(3);
            expect(OptionSet.FormType.Disabled).toBe(4);
            expect(OptionSet.FormType.BulkEdit).toBe(5);
        });

        test('SaveMode should have correct values', () => {
            expect(OptionSet.SaveMode.Save).toBe(1);
            expect(OptionSet.SaveMode.SaveAndClose).toBe(2);
            expect(OptionSet.SaveMode.AutoSave).toBe(70);
        });

        test('GridType should have correct values', () => {
            expect(OptionSet.GridType.HomePageGrid).toBe(1);
            expect(OptionSet.GridType.Subgrid).toBe(2);
        });

        test('FormFactor should have correct values', () => {
            expect(OptionSet.FormFactor.Unknown).toBe(0);
            expect(OptionSet.FormFactor.Desktop).toBe(1);
            expect(OptionSet.FormFactor.Tablet).toBe(2);
            expect(OptionSet.FormFactor.Phone).toBe(3);
        });

        test('FieldRequiredLevel should have correct values', () => {
            expect(OptionSet.FieldRequiredLevel.None).toBe('none');
            expect(OptionSet.FieldRequiredLevel.Required).toBe('required');
            expect(OptionSet.FieldRequiredLevel.Recommended).toBe('recommended');
        });

        test('FieldSubmitMode should have correct values', () => {
            expect(OptionSet.FieldSubmitMode.Always).toBe('always');
            expect(OptionSet.FieldSubmitMode.Never).toBe('never');
            expect(OptionSet.FieldSubmitMode.Dirty).toBe('dirty');
        });

        test('SidePaneState should have correct values', () => {
            expect(OptionSet.SidePaneState.Collapsed).toBe(0);
            expect(OptionSet.SidePaneState.Expanded).toBe(1);
        });
    });

    // =========================================================================
    // LoadFormV2 Tests
    // =========================================================================
    describe('LoadFormV2', () => {
        let mockExecutionContext: any;
        let mockFormContext: any;

        beforeEach(() => {
            // Create mock form context
            mockFormContext = {
                data: {
                    entity: {
                        getId: jest.fn().mockReturnValue('{00000000-0000-0000-0000-000000000001}'),
                        getEntityName: jest.fn().mockReturnValue('account'),
                        getEntityReference: jest.fn().mockReturnValue({
                            entityType: 'account',
                            id: '{00000000-0000-0000-0000-000000000001}',
                            name: 'Test Account'
                        }),
                        getPrimaryAttributeValue: jest.fn().mockReturnValue('Test Account'),
                        getDataXml: jest.fn().mockReturnValue('<dataxxml/>'),
                        getIsDirty: jest.fn().mockReturnValue(false),
                        isValid: jest.fn().mockReturnValue(true),
                        addOnSave: jest.fn(),
                        removeOnSave: jest.fn(),
                        addOnPostSave: jest.fn(),
                        removeOnPostSave: jest.fn(),
                        attributes: {
                            get: jest.fn().mockImplementation((name: string) => ({
                                getName: () => name,
                                getValue: jest.fn().mockReturnValue('test value'),
                                setValue: jest.fn(),
                                getAttributeType: jest.fn().mockReturnValue('string'),
                                getFormat: jest.fn().mockReturnValue('text'),
                                getIsDirty: jest.fn().mockReturnValue(false),
                                isValid: jest.fn().mockReturnValue(true),
                                getRequiredLevel: jest.fn().mockReturnValue('none'),
                                setRequiredLevel: jest.fn(),
                                getSubmitMode: jest.fn().mockReturnValue('dirty'),
                                setSubmitMode: jest.fn(),
                                addOnChange: jest.fn(),
                                removeOnChange: jest.fn(),
                                fireOnChange: jest.fn(),
                                setIsValid: jest.fn()
                            }))
                        }
                    },
                    getIsDirty: jest.fn().mockReturnValue(false),
                    isValid: jest.fn().mockReturnValue(true),
                    refresh: jest.fn().mockResolvedValue(undefined),
                    save: jest.fn().mockResolvedValue(undefined),
                    addOnLoad: jest.fn(),
                    removeOnLoad: jest.fn()
                },
                ui: {
                    getFormType: jest.fn().mockReturnValue(2),
                    getViewPortHeight: jest.fn().mockReturnValue(800),
                    getViewPortWidth: jest.fn().mockReturnValue(1200),
                    close: jest.fn(),
                    setFormNotification: jest.fn().mockReturnValue(true),
                    clearFormNotification: jest.fn().mockReturnValue(true),
                    refreshRibbon: jest.fn(),
                    addLoaded: jest.fn(),
                    removeLoaded: jest.fn(),
                    addOnLoad: jest.fn(),
                    removeOnLoad: jest.fn(),
                    controls: {
                        get: jest.fn()
                    },
                    tabs: {
                        get: jest.fn().mockImplementation((name: string) => ({
                            getName: () => name,
                            getLabel: jest.fn().mockReturnValue('Tab Label'),
                            setLabel: jest.fn(),
                            getVisible: jest.fn().mockReturnValue(true),
                            setVisible: jest.fn(),
                            getDisplayState: jest.fn().mockReturnValue('expanded'),
                            setDisplayState: jest.fn(),
                            setFocus: jest.fn(),
                            addTabStateChange: jest.fn(),
                            removeTabStateChange: jest.fn(),
                            sections: {
                                get: jest.fn().mockImplementation((sectionName: string) => ({
                                    getName: () => sectionName,
                                    getLabel: jest.fn().mockReturnValue('Section Label'),
                                    setLabel: jest.fn(),
                                    getVisible: jest.fn().mockReturnValue(true),
                                    setVisible: jest.fn()
                                }))
                            }
                        }))
                    },
                    formSelector: {
                        getCurrentItem: jest.fn().mockReturnValue({
                            getId: jest.fn().mockReturnValue('{form-guid}'),
                            getLabel: jest.fn().mockReturnValue('Main Form')
                        }),
                        items: {
                            getLength: jest.fn().mockReturnValue(1),
                            get: jest.fn()
                        }
                    },
                    navigation: {
                        items: {
                            getLength: jest.fn().mockReturnValue(0),
                            get: jest.fn()
                        }
                    },
                    quickForms: {
                        get: jest.fn()
                    }
                },
                getControl: jest.fn().mockImplementation((name: string) => ({
                    getName: () => name,
                    getControlType: jest.fn().mockReturnValue('standard'),
                    getLabel: jest.fn().mockReturnValue('Field Label'),
                    setLabel: jest.fn(),
                    getVisible: jest.fn().mockReturnValue(true),
                    setVisible: jest.fn(),
                    getDisabled: jest.fn().mockReturnValue(false),
                    setDisabled: jest.fn(),
                    setFocus: jest.fn(),
                    setNotification: jest.fn().mockReturnValue(true),
                    clearNotification: jest.fn().mockReturnValue(true),
                    addNotification: jest.fn(),
                    getAttribute: jest.fn().mockReturnValue({
                        getName: () => name
                    }),
                    addOnOutputChange: jest.fn(),
                    removeOnOutputChange: jest.fn()
                })),
                getAttribute: jest.fn().mockImplementation((name: string) => ({
                    getName: () => name,
                    getValue: jest.fn().mockReturnValue('test value'),
                    setValue: jest.fn(),
                    getAttributeType: jest.fn().mockReturnValue('string'),
                    getFormat: jest.fn().mockReturnValue('text'),
                    getIsDirty: jest.fn().mockReturnValue(false),
                    isValid: jest.fn().mockReturnValue(true),
                    getRequiredLevel: jest.fn().mockReturnValue('none'),
                    setRequiredLevel: jest.fn(),
                    getSubmitMode: jest.fn().mockReturnValue('dirty'),
                    setSubmitMode: jest.fn(),
                    addOnChange: jest.fn(),
                    removeOnChange: jest.fn(),
                    fireOnChange: jest.fn(),
                    setIsValid: jest.fn()
                }))
            };

            mockExecutionContext = {
                getFormContext: jest.fn().mockReturnValue(mockFormContext),
                getDepth: jest.fn().mockReturnValue(1),
                getEventArgs: jest.fn().mockReturnValue({
                    getDataLoadState: jest.fn().mockReturnValue(1),
                    getSaveMode: jest.fn().mockReturnValue(1),
                    isDefaultPrevented: jest.fn().mockReturnValue(false),
                    preventDefault: jest.fn(),
                    preventDefaultOnError: jest.fn(),
                    disableAsyncTimeout: jest.fn(),
                    getIsSaveSuccess: jest.fn().mockReturnValue(true),
                    getSaveErrorInfo: jest.fn().mockReturnValue(null),
                    getEntityReference: jest.fn()
                }),
                getEventSource: jest.fn(),
                getSharedVariable: jest.fn(),
                setSharedVariable: jest.fn()
            };
        });

        test('should load form with basic configuration', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, {
                body: ['name', 'telephone1'],
                header: [],
                tab: [],
                grid: [],
                navigation: [],
                quick: []
            });

            expect(result).toBeDefined();
            expect(result.Body).toBeDefined();
            expect(result.ExecutionContext).toBeDefined();
        });

        test('should load ExecutionContext correctly', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, {});

            expect(result.ExecutionContext).toBeDefined();
            expect(result.ExecutionContext.Depth).toBe(1);
            expect(result.ExecutionContext.IsInitialLoad()).toBe(true);
        });

        test('should load form properties', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, {});

            expect(result.EntityId).toBe('{00000000-0000-0000-0000-000000000001}');
            expect(result.EntityName).toBe('account');
            expect(result.FormType).toBe(2);
        });

        test('should provide form methods', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, {});

            expect(typeof result.Refresh).toBe('function');
            expect(typeof result.Close).toBe('function');
            expect(typeof result.SetFormNotification).toBe('function');
            expect(typeof result.ClearFormNotification).toBe('function');
            expect(typeof result.RefreshRibbon).toBe('function');
        });

        test('should load body fields', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, {
                body: ['name', 'telephone1']
            });

            expect(result.Body).toBeDefined();
            expect(result.Body.name).toBeDefined();
            expect(result.Body.telephone1).toBeDefined();
        });

        test('should handle empty configuration', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, {});

            expect(result).toBeDefined();
            expect(result.Body).toEqual({});
        });
    });

    // =========================================================================
    // LoadProcess Tests
    // =========================================================================
    describe('LoadProcess', () => {
        let mockFormContext: any;

        beforeEach(() => {
            mockFormContext = {
                data: {
                    process: {
                        getActiveProcess: jest.fn().mockReturnValue({
                            getId: jest.fn().mockReturnValue('{process-id}'),
                            getName: jest.fn().mockReturnValue('Lead to Opportunity'),
                            getStages: jest.fn().mockReturnValue({
                                getLength: jest.fn().mockReturnValue(2),
                                get: jest.fn()
                            })
                        }),
                        getActiveStage: jest.fn().mockReturnValue(null),
                        getActivePath: jest.fn().mockReturnValue({
                            getLength: jest.fn().mockReturnValue(0),
                            get: jest.fn()
                        }),
                        getProcessInstances: jest.fn(),
                        getEnabledProcesses: jest.fn(),
                        addOnPreProcessStatusChange: jest.fn(),
                        removeOnPreProcessStatusChange: jest.fn(),
                        addOnPreStageChange: jest.fn(),
                        removeOnPreStageChange: jest.fn(),
                        addOnProcessStatusChange: jest.fn(),
                        removeOnProcessStatusChange: jest.fn(),
                        addOnStageChange: jest.fn(),
                        removeOnStageChange: jest.fn(),
                        addOnStageSelected: jest.fn(),
                        removeOnStageSelected: jest.fn(),
                        setActiveProcess: jest.fn(),
                        setActiveProcessInstance: jest.fn(),
                        setActiveStage: jest.fn()
                    }
                },
                ui: {
                    process: {
                        getDisplayState: jest.fn().mockReturnValue('expanded'),
                        setDisplayState: jest.fn(),
                        getVisible: jest.fn().mockReturnValue(true),
                        setVisible: jest.fn(),
                        reflow: jest.fn()
                    }
                }
            };
        });

        test('should load process correctly', () => {
            const result = LoadProcess(mockFormContext);

            expect(result).toBeDefined();
            expect(typeof result.AddOnPreProcessStatusChange).toBe('function');
            expect(typeof result.AddOnStageChange).toBe('function');
        });

        test('should have DisplayState property', () => {
            const result = LoadProcess(mockFormContext);

            expect(result.DisplayState).toBe('expanded');
        });

        test('should have Visible property', () => {
            const result = LoadProcess(mockFormContext);

            expect(result.Visible).toBe(true);
        });

        test('should handle null formContext gracefully', () => {
            const result = LoadProcess(null);

            expect(result).toBeDefined();
        });
    });

    // =========================================================================
    // LoadUtility Tests
    // =========================================================================
    describe('LoadUtility', () => {
        beforeEach(() => {
            // Mock Xrm global object
            (global as any).window = {
                Xrm: {
                    Utility: {
                        getGlobalContext: jest.fn().mockReturnValue({
                            getClientUrl: jest.fn().mockReturnValue('https://org.crm.dynamics.com'),
                            getCurrentAppUrl: jest.fn().mockReturnValue('https://org.crm.dynamics.com/main.aspx'),
                            getVersion: jest.fn().mockReturnValue('9.2.0.0'),
                            isOnPremises: jest.fn().mockReturnValue(false),
                            prependOrgName: jest.fn().mockImplementation((path: string) => `/org${path}`),
                            getWebResourceUrl: jest.fn()
                        }),
                        showProgressIndicator: jest.fn(),
                        closeProgressIndicator: jest.fn(),
                        refreshParentGrid: jest.fn(),
                        getResourceString: jest.fn()
                    },
                    Navigation: {
                        openAlertDialog: jest.fn().mockResolvedValue(undefined),
                        openConfirmDialog: jest.fn().mockResolvedValue({ confirmed: true }),
                        openErrorDialog: jest.fn().mockResolvedValue(undefined),
                        openForm: jest.fn().mockResolvedValue(undefined),
                        openFile: jest.fn(),
                        openUrl: jest.fn(),
                        openWebResource: jest.fn()
                    },
                    Device: {
                        captureImage: jest.fn().mockResolvedValue({}),
                        captureAudio: jest.fn().mockResolvedValue({}),
                        captureVideo: jest.fn().mockResolvedValue({}),
                        getBarcodeValue: jest.fn().mockResolvedValue('barcode'),
                        getCurrentPosition: jest.fn().mockResolvedValue({}),
                        pickFile: jest.fn().mockResolvedValue([])
                    },
                    Encoding: {
                        xmlAttributeEncode: jest.fn().mockImplementation((s: string) => s),
                        xmlEncode: jest.fn().mockImplementation((s: string) => s)
                    },
                    App: {
                        addGlobalNotification: jest.fn().mockResolvedValue('notification-id'),
                        clearGlobalNotification: jest.fn().mockResolvedValue(undefined)
                    }
                }
            };
        });

        afterEach(() => {
            delete (global as any).window;
        });

        test('should load utility correctly', () => {
            const result = LoadUtility(undefined);

            expect(result).toBeDefined();
            expect(typeof result.CloseProgressIndicator).toBe('function');
            expect(typeof result.ShowProgressIndicator).toBe('function');
        });

        test('should have dialog methods', () => {
            const result = LoadUtility(undefined);

            expect(typeof result.OpenAlertDialog).toBe('function');
            expect(typeof result.OpenConfirmDialog).toBe('function');
            expect(typeof result.OpenErrorDialog).toBe('function');
        });

        test('should have navigation methods', () => {
            const result = LoadUtility(undefined);

            expect(typeof result.OpenForm).toBe('function');
            expect(typeof result.OpenUrl).toBe('function');
            expect(typeof result.OpenWebResource).toBe('function');
        });

        test('should have device methods', () => {
            const result = LoadUtility(undefined);

            expect(typeof result.CaptureImage).toBe('function');
            expect(typeof result.CaptureAudio).toBe('function');
            expect(typeof result.CaptureVideo).toBe('function');
        });

        test('should handle undefined webResourceName', () => {
            const result = LoadUtility(undefined);

            expect(result).toBeDefined();
        });
    });

    // =========================================================================
    // LoadSidePanes Tests
    // =========================================================================
    describe('LoadSidePanes', () => {
        beforeEach(() => {
            (global as any).window = {
                Xrm: {
                    App: {
                        sidePanes: {
                            state: 1,
                            createPane: jest.fn().mockResolvedValue({ paneId: 'pane1' }),
                            getPane: jest.fn().mockReturnValue({ paneId: 'pane1' }),
                            getAllPanes: jest.fn().mockReturnValue([]),
                            getSelectedPane: jest.fn().mockReturnValue(null)
                        }
                    }
                }
            };
        });

        afterEach(() => {
            delete (global as any).window;
        });

        test('should load side panes correctly', () => {
            const result = LoadSidePanes();

            expect(result).toBeDefined();
            expect(typeof result.Create).toBe('function');
            expect(typeof result.Get).toBe('function');
            expect(typeof result.GetAll).toBe('function');
            expect(typeof result.GetSelected).toBe('function');
        });

        test('should have DisplayState property', () => {
            const result = LoadSidePanes();

            expect(result.DisplayState).toBe(1);
        });

        test('should get pane by id', () => {
            const result = LoadSidePanes();
            const pane = result.Get('pane1');

            expect(pane).toBeDefined();
            expect(pane.paneId).toBe('pane1');
        });
    });

    // =========================================================================
    // LoadFormDialog Tests
    // =========================================================================
    describe('LoadFormDialog', () => {
        let mockFormContext: any;

        beforeEach(() => {
            mockFormContext = {
                data: {
                    entity: {
                        attributes: {
                            get: jest.fn().mockImplementation((name: string) => ({
                                getName: () => name,
                                getValue: jest.fn().mockReturnValue('test'),
                                setValue: jest.fn(),
                                getAttributeType: jest.fn().mockReturnValue('string'),
                                getFormat: jest.fn().mockReturnValue('text'),
                                getIsDirty: jest.fn().mockReturnValue(false),
                                isValid: jest.fn().mockReturnValue(true),
                                getRequiredLevel: jest.fn().mockReturnValue('none'),
                                setRequiredLevel: jest.fn(),
                                getSubmitMode: jest.fn().mockReturnValue('dirty'),
                                setSubmitMode: jest.fn(),
                                addOnChange: jest.fn(),
                                removeOnChange: jest.fn(),
                                fireOnChange: jest.fn(),
                                setIsValid: jest.fn()
                            }))
                        }
                    }
                },
                ui: {
                    close: jest.fn()
                },
                getControl: jest.fn().mockImplementation((name: string) => ({
                    getName: () => name,
                    getControlType: jest.fn().mockReturnValue('standard'),
                    getLabel: jest.fn().mockReturnValue('Field Label'),
                    setLabel: jest.fn(),
                    getVisible: jest.fn().mockReturnValue(true),
                    setVisible: jest.fn(),
                    getDisabled: jest.fn().mockReturnValue(false),
                    setDisabled: jest.fn(),
                    setFocus: jest.fn(),
                    setNotification: jest.fn().mockReturnValue(true),
                    clearNotification: jest.fn().mockReturnValue(true),
                    addNotification: jest.fn(),
                    getAttribute: jest.fn(),
                    addOnOutputChange: jest.fn(),
                    removeOnOutputChange: jest.fn()
                }))
            };
        });

        test('should load form dialog with fields', () => {
            const result = LoadFormDialog(mockFormContext, ['name', 'email']);

            expect(result).toBeDefined();
            expect(result.name).toBeDefined();
            expect(result.email).toBeDefined();
        });

        test('should have Close method', () => {
            const result = LoadFormDialog(mockFormContext, ['name']);

            expect(typeof result.Close).toBe('function');
        });

        test('should call ui.close when Close is called', () => {
            const result = LoadFormDialog(mockFormContext, []);

            result.Close();

            expect(mockFormContext.ui.close).toHaveBeenCalled();
        });

        test('should handle empty fields array', () => {
            const result = LoadFormDialog(mockFormContext, []);

            expect(result).toBeDefined();
            expect(typeof result.Close).toBe('function');
        });

        test('should handle null formContext', () => {
            const result = LoadFormDialog(null, ['name']);

            expect(result).toBeDefined();
        });
    });
});
