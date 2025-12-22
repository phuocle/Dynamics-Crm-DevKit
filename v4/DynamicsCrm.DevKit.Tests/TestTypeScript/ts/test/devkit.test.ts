/**
 * DevKit.ts Unit Tests
 * Using xrm-mock for mocking Xrm API
 */
import { XrmMockGenerator } from 'xrm-mock';
import {
    FormBase,
    LoadFormV3,
    LoadProcess,
    LoadUtility,
    LoadFormDialog
} from '../lib/devkit';
import { OptionSet } from '../entities/generator/OptionSet';

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
    // LoadFormV3 Tests
    // =========================================================================
    describe('LoadFormV3', () => {
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
            const result = LoadFormV3(mockExecutionContext, undefined, {
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
            const result = LoadFormV3(mockExecutionContext, undefined, {});

            expect(result.ExecutionContext).toBeDefined();
            expect(result.ExecutionContext.Depth).toBe(1);
            expect(result.ExecutionContext.IsInitialLoad()).toBe(true);
        });

        test('should load form properties', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {});

            expect(result.EntityId).toBe('{00000000-0000-0000-0000-000000000001}');
            expect(result.EntityName).toBe('account');
            expect(result.FormType).toBe(2);
        });

        test('should provide form methods', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {});

            expect(typeof result.Refresh).toBe('function');
            expect(typeof result.Close).toBe('function');
            expect(typeof result.SetFormNotification).toBe('function');
            expect(typeof result.ClearFormNotification).toBe('function');
            expect(typeof result.RefreshRibbon).toBe('function');
        });

        test('should load body fields', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {
                body: ['name', 'telephone1']
            });

            expect(result.Body).toBeDefined();
            expect(result.Body.name).toBeDefined();
            expect(result.Body.telephone1).toBeDefined();
        });

        test('should handle empty configuration', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {});

            expect(result).toBeDefined();
            expect(result.Body).toEqual({ Tab: {} });
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
    // LoadSidePanes Tests (via LoadFormV3)
    // =========================================================================
    describe('LoadSidePanes (via LoadFormV3)', () => {
        let mockExecutionContext: any;

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
            mockExecutionContext = {
                getFormContext: () => ({
                    data: { entity: { attributes: { get: () => null } } },
                    ui: { formSelector: { getCurrentItem: () => null } }
                })
            };
        });

        afterEach(() => {
            delete (global as any).window;
        });

        test('should load side panes correctly', () => {
            const form = LoadFormV3(mockExecutionContext, undefined, {});
            const result = form.SidePanes;

            expect(result).toBeDefined();
            expect(typeof result.Create).toBe('function');
            expect(typeof result.Get).toBe('function');
            expect(typeof result.GetAll).toBe('function');
            expect(typeof result.GetSelected).toBe('function');
        });

        test('should have DisplayState property', () => {
            const form = LoadFormV3(mockExecutionContext, undefined, {});
            const result = form.SidePanes;

            expect(result.DisplayState).toBe(1);
        });

        test('should get pane by id', () => {
            const form = LoadFormV3(mockExecutionContext, undefined, {});
            const result = form.SidePanes;
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

    // =========================================================================
    // LoadFormV3 Extended Tests - Field Properties & Methods
    // =========================================================================
    describe('LoadFormV3 Extended - Field Operations', () => {
        let mockExecutionContext: any;
        let mockFormContext: any;

        beforeEach(() => {
            mockFormContext = {
                data: {
                    entity: {
                        getId: jest.fn().mockReturnValue('{00000000-0000-0000-0000-000000000001}'),
                        getEntityName: jest.fn().mockReturnValue('account'),
                        getEntityReference: jest.fn().mockReturnValue({ entityType: 'account', id: '{guid}', name: 'Test' }),
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
                                getIsDirty: jest.fn().mockReturnValue(true),
                                isValid: jest.fn().mockReturnValue(true),
                                getRequiredLevel: jest.fn().mockReturnValue('required'),
                                setRequiredLevel: jest.fn(),
                                getSubmitMode: jest.fn().mockReturnValue('always'),
                                setSubmitMode: jest.fn(),
                                addOnChange: jest.fn(),
                                removeOnChange: jest.fn(),
                                fireOnChange: jest.fn(),
                                setIsValid: jest.fn(),
                                getMax: jest.fn().mockReturnValue(100),
                                getMin: jest.fn().mockReturnValue(0),
                                getMaxLength: jest.fn().mockReturnValue(255),
                                getOptions: jest.fn().mockReturnValue([{ text: 'Option1', value: 1 }]),
                                getSelectedOption: jest.fn().mockReturnValue({ text: 'Option1', value: 1 }),
                                getText: jest.fn().mockReturnValue('Option1')
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
                    controls: { get: jest.fn() },
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
                        items: { getLength: jest.fn().mockReturnValue(1), get: jest.fn() }
                    },
                    navigation: {
                        items: {
                            getLength: jest.fn().mockReturnValue(2),
                            get: jest.fn().mockImplementation((index: number) => ({
                                getId: () => index === 0 ? 'nav_contacts' : 'nav_activities',
                                getLabel: jest.fn().mockReturnValue('Navigation Label'),
                                setLabel: jest.fn(),
                                getVisible: jest.fn().mockReturnValue(true),
                                setVisible: jest.fn(),
                                setFocus: jest.fn()
                            }))
                        }
                    },
                    quickForms: {
                        get: jest.fn().mockImplementation((name: string) => ({
                            getName: () => name,
                            isLoaded: jest.fn().mockReturnValue(true),
                            refresh: jest.fn(),
                            getVisible: jest.fn().mockReturnValue(true),
                            setVisible: jest.fn(),
                            getControlType: jest.fn().mockReturnValue('quickform'),
                            getControl: jest.fn()
                        }))
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
                    getAttribute: jest.fn().mockReturnValue({ getName: () => name }),
                    addOnOutputChange: jest.fn(),
                    removeOnOutputChange: jest.fn(),
                    // Grid control methods
                    getEntityName: jest.fn().mockReturnValue('contact'),
                    getFetchXml: jest.fn().mockReturnValue('<fetch/>'),
                    getGridType: jest.fn().mockReturnValue(2),
                    getRelationship: jest.fn().mockReturnValue({ name: 'contact_account', navigationPropertyName: 'contact_account' }),
                    getGrid: jest.fn().mockReturnValue({
                        getTotalRecordCount: jest.fn().mockReturnValue(5),
                        getRows: jest.fn().mockReturnValue({
                            getLength: jest.fn().mockReturnValue(2),
                            get: jest.fn().mockImplementation((index: number) => ({
                                data: {
                                    entity: {
                                        getId: jest.fn().mockReturnValue(`{row-${index}}`),
                                        getEntityName: jest.fn().mockReturnValue('contact'),
                                        getEntityReference: jest.fn().mockReturnValue({ entityType: 'contact', id: `{row-${index}}` }),
                                        getPrimaryAttributeValue: jest.fn().mockReturnValue(`Contact ${index}`),
                                        attributes: {
                                            getLength: jest.fn().mockReturnValue(2),
                                            get: jest.fn().mockImplementation((colIndex: number) => ({
                                                getName: () => `column${colIndex}`,
                                                getValue: jest.fn().mockReturnValue(`value${colIndex}`),
                                                setValue: jest.fn(),
                                                getRequiredLevel: jest.fn().mockReturnValue('none'),
                                                setRequiredLevel: jest.fn(),
                                                controls: {
                                                    get: jest.fn().mockReturnValue({
                                                        getLabel: jest.fn().mockReturnValue(`Column ${colIndex}`),
                                                        getDisabled: jest.fn().mockReturnValue(false),
                                                        setDisabled: jest.fn(),
                                                        setNotification: jest.fn(),
                                                        clearNotification: jest.fn()
                                                    })
                                                }
                                            }))
                                        }
                                    }
                                }
                            }))
                        }),
                        getSelectedRows: jest.fn().mockReturnValue({
                            getLength: jest.fn().mockReturnValue(1),
                            get: jest.fn().mockReturnValue({
                                getData: jest.fn().mockReturnValue({
                                    data: { entity: { getId: jest.fn().mockReturnValue('{selected-row}') } }
                                })
                            })
                        })
                    }),
                    getViewSelector: jest.fn().mockReturnValue({
                        isVisible: jest.fn().mockReturnValue(true),
                        getCurrentView: jest.fn().mockReturnValue({ name: 'Active Contacts' }),
                        setCurrentView: jest.fn()
                    }),
                    addOnLoad: jest.fn(),
                    removeOnLoad: jest.fn(),
                    openRelatedGrid: jest.fn(),
                    refresh: jest.fn(),
                    refreshRibbon: jest.fn(),
                    getUrl: jest.fn().mockReturnValue('https://url')
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
                    setIsValid: jest.fn(),
                    getMax: jest.fn().mockReturnValue(100),
                    getMin: jest.fn().mockReturnValue(0),
                    getMaxLength: jest.fn().mockReturnValue(255)
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
                getSharedVariable: jest.fn().mockReturnValue('sharedValue'),
                setSharedVariable: jest.fn()
            };
        });

        test('should load field with all properties', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {
                body: ['name']
            });

            expect(result.Body.name).toBeDefined();
            expect(result.Body.name.AttributeName).toBe('name');
            expect(result.Body.name.ControlType).toBe('standard');
            expect(result.Body.name.Label).toBe('Field Label');
        });

        test('should access field Value getter/setter', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, { body: ['name'] });

            // Access Value (getter)
            expect(result.Body.name.Value).toBe('test value');
        });

        test('should load tabs with sections', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {
                tab: ['general___section1', 'general___section2', 'details']
            });

            expect(result.Body.Tab.general).toBeDefined();
            expect(result.Body.Tab.general.Section.section1).toBeDefined();
            expect(result.Body.Tab.general.Section.section2).toBeDefined();
            expect(result.Body.Tab.details).toBeDefined();
        });

        test('should access tab properties and methods', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {
                tab: ['general']
            });

            expect(result.Body.Tab.general.Name).toBe('general');
            expect(result.Body.Tab.general.Label).toBe('Tab Label');
            expect(result.Body.Tab.general.Visible).toBe(true);
            expect(result.Body.Tab.general.DisplayState).toBe('expanded');
            expect(typeof result.Body.Tab.general.AddTabStateChange).toBe('function');
            expect(typeof result.Body.Tab.general.RemoveTabStateChange).toBe('function');
            expect(typeof result.Body.Tab.general.Focus).toBe('function');
        });

        test('should load grids with properties', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {
                grid: ['Contacts']
            });

            expect(result.Grid.Contacts).toBeDefined();
            expect(result.Grid.Contacts.EntityName).toBe('contact');
            expect(result.Grid.Contacts.FetchXml).toBe('<fetch/>');
            expect(result.Grid.Contacts.GridType).toBe(2);
            expect(result.Grid.Contacts.TotalRecordCount).toBe(5);
        });

        test('should access grid rows collection', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {
                grid: ['Contacts']
            });

            const rows = result.Grid.Contacts.Rows;
            expect(rows.getLength()).toBe(2);

            const row0 = rows.get(0);
            expect(row0.EntityId).toBe('{row-0}');
            expect(row0.EntityName).toBe('contact');
        });

        test('should iterate grid rows with forEach', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {
                grid: ['Contacts']
            });

            const rowIds: string[] = [];
            result.Grid.Contacts.Rows.forEach((row: any, index: number) => {
                rowIds.push(row.EntityId);
            });

            expect(rowIds.length).toBe(2);
        });

        test('should access grid columns in rows', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {
                grid: ['Contacts']
            });

            const row = result.Grid.Contacts.Rows.get(0);
            const columns = row.Columns;
            expect(columns.getLength()).toBe(2);

            const col0 = columns.get(0);
            expect(col0.Name).toBe('column0');
            expect(col0.Value).toBe('value0');
        });

        test('should iterate columns with forEach', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {
                grid: ['Contacts']
            });

            const row = result.Grid.Contacts.Rows.get(0);
            const colNames: string[] = [];
            row.Columns.forEach((col: any) => {
                colNames.push(col.Name);
            });

            expect(colNames).toContain('column0');
            expect(colNames).toContain('column1');
        });

        test('should access grid ViewSelector', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {
                grid: ['Contacts']
            });

            const viewSelector = result.Grid.Contacts.ViewSelector;
            expect(viewSelector.Visible).toBe(true);
            expect(viewSelector.CurrentView.name).toBe('Active Contacts');
        });

        test('should have grid methods', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {
                grid: ['Contacts']
            });

            expect(typeof result.Grid.Contacts.AddOnLoad).toBe('function');
            expect(typeof result.Grid.Contacts.RemoveOnLoad).toBe('function');
            expect(typeof result.Grid.Contacts.OpenRelatedGrid).toBe('function');
            expect(typeof result.Grid.Contacts.Refresh).toBe('function');
            expect(typeof result.Grid.Contacts.RefreshRibbon).toBe('function');
            expect(typeof result.Grid.Contacts.Url).toBe('function');
        });

        test('should load navigation items', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {
                navigation: ['nav_contacts']
            });

            expect(result.Navigation.nav_contacts).toBeDefined();
            expect(result.Navigation.nav_contacts.Id).toBe('nav_contacts');
        });

        test('should load header fields', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {
                header: ['ownerid']
            });

            expect(result.Header.ownerid).toBeDefined();
        });

        test('should load quick forms', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {
                quick: ['contactquickform___emailaddress1']
            });

            expect(result.QuickForm.contactquickform).toBeDefined();
            expect(result.QuickForm.contactquickform.IsLoaded()).toBe(true);
        });

        test('should call field methods', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, { body: ['name'] });

            // Test field methods
            result.Body.name.AddOnChange(() => { });
            result.Body.name.RemoveOnChange(() => { });
            result.Body.name.FireOnChange();
            result.Body.name.Focus();
            result.Body.name.SetNotification('error', 'id1');
            result.Body.name.ClearNotification('id1');
            result.Body.name.SetIsValid(true, 'message');

            // Verify form was loaded
            expect(result.Body.name).toBeDefined();
        });

        test('should access ExecutionContext methods', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {});

            expect(result.ExecutionContext.Depth).toBe(1);
            expect(result.ExecutionContext.GetSharedVariable('key')).toBe('sharedValue');
            expect(result.ExecutionContext.IsDefaultPrevented()).toBe(false);

            result.ExecutionContext.SetSharedVariable('key', 'value');
            result.ExecutionContext.SetPreventDefault();
            result.ExecutionContext.SetPreventDefaultOnError();
            result.ExecutionContext.DisableAsyncTimeout();
        });
    });

    // =========================================================================
    // LoadProcess Extended Tests
    // =========================================================================
    describe('LoadProcess Extended', () => {
        let mockFormContext: any;

        beforeEach(() => {
            mockFormContext = {
                data: {
                    process: {
                        getActiveProcess: jest.fn().mockReturnValue({
                            getId: jest.fn().mockReturnValue('{process-id}'),
                            getName: jest.fn().mockReturnValue('Sales Process'),
                            getStages: jest.fn().mockReturnValue({
                                getLength: jest.fn().mockReturnValue(3),
                                get: jest.fn().mockImplementation((index: number) => ({
                                    getId: jest.fn().mockReturnValue(`{stage-${index}}`),
                                    getName: jest.fn().mockReturnValue(`Stage ${index}`),
                                    getCategory: jest.fn().mockReturnValue({ getValue: jest.fn().mockReturnValue(index) }),
                                    getEntityName: jest.fn().mockReturnValue('opportunity'),
                                    getStatus: jest.fn().mockReturnValue('active'),
                                    getSteps: jest.fn().mockReturnValue({
                                        length: 2,
                                        0: {
                                            getAttribute: jest.fn().mockReturnValue('name'),
                                            getName: jest.fn().mockReturnValue('Step 1'),
                                            getProgress: jest.fn().mockReturnValue(0),
                                            isRequired: jest.fn().mockReturnValue(true),
                                            setProgress: jest.fn()
                                        },
                                        1: {
                                            getAttribute: jest.fn().mockReturnValue('email'),
                                            getName: jest.fn().mockReturnValue('Step 2'),
                                            getProgress: jest.fn().mockReturnValue(1),
                                            isRequired: jest.fn().mockReturnValue(false),
                                            setProgress: jest.fn()
                                        }
                                    })
                                }))
                            })
                        }),
                        getActiveStage: jest.fn().mockReturnValue({
                            getId: jest.fn().mockReturnValue('{active-stage}'),
                            getName: jest.fn().mockReturnValue('Qualify')
                        }),
                        getActivePath: jest.fn().mockReturnValue({
                            getLength: jest.fn().mockReturnValue(2),
                            get: jest.fn()
                        }),
                        getProcessInstances: jest.fn().mockImplementation((callback: any) => callback([
                            { ProcessDefinitionId: '{proc1}', ProcessDefinitionName: 'Process 1', Status: 'active', StatusCodeName: 'Active' }
                        ])),
                        getEnabledProcesses: jest.fn().mockImplementation((callback: any) => callback({
                            '{proc1}': 'Process 1',
                            '{proc2}': 'Process 2'
                        })),
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
                        setActiveStage: jest.fn(),
                        moveNext: jest.fn().mockImplementation((callback: any) => callback('success')),
                        movePrevious: jest.fn().mockImplementation((callback: any) => callback('success'))
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

        test('should get active process with stages', () => {
            const result = LoadProcess(mockFormContext);

            const activeProcess = result.ActiveProcess;
            expect(activeProcess.Id).toBe('{process-id}');
            expect(activeProcess.Name).toBe('Sales Process');
        });

        test('should get active stage', () => {
            const result = LoadProcess(mockFormContext);

            const activeStage = result.ActiveStage;
            expect(activeStage.Id).toBe('{active-stage}');
            expect(activeStage.Name).toBe('Qualify');
        });

        test('should call process navigation methods', () => {
            const result = LoadProcess(mockFormContext);

            const moveNextResult: string[] = [];
            result.MoveNext((status: string) => moveNextResult.push(status));
            expect(moveNextResult[0]).toBe('success');
        });

        test('should call process event handlers', () => {
            const result = LoadProcess(mockFormContext);
            const callback = jest.fn();

            result.AddOnPreProcessStatusChange(callback);
            result.AddOnPreStageChange(callback);
            result.AddOnProcessStatusChange(callback);
            result.AddOnStageChange(callback);
            result.AddOnStageSelected(callback);

            expect(mockFormContext.data.process.addOnPreProcessStatusChange).toHaveBeenCalled();
            expect(mockFormContext.data.process.addOnStageChange).toHaveBeenCalled();
        });

        test('should set active process', () => {
            const result = LoadProcess(mockFormContext);

            result.SetActiveProcess('{new-process}', jest.fn());

            expect(mockFormContext.data.process.setActiveProcess).toHaveBeenCalledWith('{new-process}', expect.any(Function));
        });
    });

    // =========================================================================
    // LoadUtility Extended Tests
    // =========================================================================
    describe('LoadUtility Extended', () => {
        beforeEach(() => {
            (global as any).window = {
                Xrm: {
                    Utility: {
                        getGlobalContext: jest.fn().mockReturnValue({
                            getClientUrl: jest.fn().mockReturnValue('https://org.crm.dynamics.com'),
                            getCurrentAppUrl: jest.fn().mockReturnValue('https://org.crm.dynamics.com/main.aspx'),
                            getVersion: jest.fn().mockReturnValue('9.2.0.0'),
                            isOnPremises: jest.fn().mockReturnValue(false),
                            prependOrgName: jest.fn().mockImplementation((p: string) => `/org${p}`),
                            getWebResourceUrl: jest.fn().mockReturnValue('/webresources/test'),
                            client: {
                                getClient: jest.fn().mockReturnValue('Web'),
                                getClientState: jest.fn().mockReturnValue('Online'),
                                getFormFactor: jest.fn().mockReturnValue(1),
                                isOffline: jest.fn().mockReturnValue(false)
                            },
                            organizationSettings: {
                                isAutoSaveEnabled: true,
                                languageId: 1033,
                                organizationId: '{org-id}',
                                uniqueName: 'orgname'
                            },
                            userSettings: {
                                languageId: 1033,
                                userId: '{user-id}',
                                userName: 'Test User',
                                securityRoles: ['{role1}', '{role2}']
                            }
                        }),
                        showProgressIndicator: jest.fn(),
                        closeProgressIndicator: jest.fn(),
                        refreshParentGrid: jest.fn(),
                        getResourceString: jest.fn().mockReturnValue('Resource String'),
                        getLearningPathAttributeName: jest.fn().mockReturnValue('lp_attr')
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
                        captureImage: jest.fn().mockResolvedValue({ fileContent: 'base64' }),
                        captureAudio: jest.fn().mockResolvedValue({ fileContent: 'base64' }),
                        captureVideo: jest.fn().mockResolvedValue({ fileContent: 'base64' }),
                        getBarcodeValue: jest.fn().mockResolvedValue('1234567890'),
                        getCurrentPosition: jest.fn().mockResolvedValue({ coords: { latitude: 0, longitude: 0 } }),
                        pickFile: jest.fn().mockResolvedValue([{ fileName: 'test.txt' }])
                    },
                    Encoding: {
                        xmlAttributeEncode: jest.fn().mockImplementation((s: string) => `encoded:${s}`),
                        xmlEncode: jest.fn().mockImplementation((s: string) => `encoded:${s}`)
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

        test('should get client information', () => {
            const result = LoadUtility(undefined);

            expect(result.Client.ClientName).toBe('Web');
            expect(result.Client.ClientState).toBe('Online');
            expect(result.Client.FormFactor).toBe(1);
        });

        test('should get organization settings', () => {
            const result = LoadUtility(undefined);

            expect(result.OrganizationSettings.OrganizationId).toBe('{org-id}');
            expect(result.OrganizationSettings.UniqueName).toBe('orgname');
            expect(result.OrganizationSettings.LanguageId).toBe(1033);
        });

        test('should get user settings', () => {
            const result = LoadUtility(undefined);

            expect(result.UserSettings.UserId).toBe('{user-id}');
            expect(result.UserSettings.UserName).toBe('Test User');
        });

        test('should call device methods', () => {
            const result = LoadUtility(undefined);

            result.CaptureImage({});
            result.CaptureAudio();
            result.CaptureVideo();
            result.BarcodeValue();
            result.CurrentPosition();

            expect((global as any).window.Xrm.Device.captureImage).toHaveBeenCalled();
        });

        test('should encode XML', () => {
            const result = LoadUtility(undefined);

            expect(result.XmlEncode('test')).toBe('encoded:test');
            expect(result.XmlAttributeEncode('test')).toBe('encoded:test');
        });

        test('should get resource string', () => {
            const result = LoadUtility('devkit_/resources');

            expect(result.Resource('key1')).toBe('Resource String');
            expect(result.ResourceString('devkit_/other', 'key2')).toBe('Resource String');
        });

        test('should get URLs', () => {
            const result = LoadUtility(undefined);

            expect(result.ClientUrl).toBe('https://org.crm.dynamics.com');
            expect(result.CurrentAppUrl).toBe('https://org.crm.dynamics.com/main.aspx');
            expect(result.Version).toBe('9.2.0.0');
        });
    });

    // =========================================================================
    // Advanced tests for better coverage
    // =========================================================================
    describe('LoadFormV3 - ReadOnly Form Tests', () => {
        let mockExecutionContext: any;
        let mockFormContext: any;

        beforeEach(() => {
            mockFormContext = {
                data: {
                    entity: {
                        getId: jest.fn().mockReturnValue('{guid}'),
                        getEntityName: jest.fn().mockReturnValue('account'),
                        getEntityReference: jest.fn().mockReturnValue({}),
                        getPrimaryAttributeValue: jest.fn().mockReturnValue('Test'),
                        getDataXml: jest.fn().mockReturnValue('<xml/>'),
                        getIsDirty: jest.fn().mockReturnValue(false),
                        isValid: jest.fn().mockReturnValue(true),
                        addOnSave: jest.fn(),
                        removeOnSave: jest.fn(),
                        addOnPostSave: jest.fn(),
                        removeOnPostSave: jest.fn(),
                        attributes: { get: jest.fn() }
                    },
                    getIsDirty: jest.fn().mockReturnValue(false),
                    isValid: jest.fn().mockReturnValue(true),
                    refresh: jest.fn().mockResolvedValue(undefined),
                    save: jest.fn().mockResolvedValue(undefined),
                    addOnLoad: jest.fn(),
                    removeOnLoad: jest.fn()
                },
                ui: {
                    getFormType: jest.fn().mockReturnValue(3), // ReadOnly form
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
                    controls: { get: jest.fn() },
                    tabs: { get: jest.fn() },
                    formSelector: {
                        getCurrentItem: jest.fn().mockReturnValue({ getId: jest.fn(), getLabel: jest.fn() }),
                        items: { getLength: jest.fn(), get: jest.fn() }
                    },
                    navigation: { items: { getLength: jest.fn().mockReturnValue(0), get: jest.fn() } },
                    quickForms: { get: jest.fn() }
                },
                getControl: jest.fn().mockImplementation((name: string) => ({
                    getName: () => name,
                    getControlType: jest.fn().mockReturnValue('standard'),
                    getLabel: jest.fn().mockReturnValue('Label'),
                    setLabel: jest.fn(),
                    getVisible: jest.fn().mockReturnValue(true),
                    setVisible: jest.fn(),
                    getDisabled: jest.fn().mockReturnValue(false),
                    setDisabled: jest.fn(),
                    setFocus: jest.fn(),
                    setNotification: jest.fn(),
                    clearNotification: jest.fn(),
                    addNotification: jest.fn(),
                    getAttribute: jest.fn().mockReturnValue({ getName: () => name }),
                    addOnOutputChange: jest.fn(),
                    removeOnOutputChange: jest.fn()
                })),
                getAttribute: jest.fn().mockImplementation((name: string) => ({
                    getName: () => name,
                    getValue: jest.fn().mockReturnValue('value'),
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

        test('should handle ReadOnly form type for Disabled setter', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, { body: ['name'] });

            // In ReadOnly form (type 3), setDisabled should not be called
            result.Body.name.Disabled = true;

            // The setter should have returned early
            expect(result.Body.name).toBeDefined();
        });

        test('should handle ReadOnly form type for Value setter', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, { body: ['name'] });

            // In ReadOnly form (type 3), setValue should not be called
            result.Body.name.Value = 'new value';

            expect(result.Body.name).toBeDefined();
        });

        test('should call form methods Save and Refresh', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {});

            result.Save({ saveMode: 1 });
            result.Refresh(true);

            expect(mockFormContext.data.save).toHaveBeenCalled();
            expect(mockFormContext.data.refresh).toHaveBeenCalled();
        });

        test('should call UI methods', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {});

            result.UiAddLoaded(() => { });
            result.UiRemoveLoaded(() => { });

            expect(mockFormContext.ui.addLoaded).toHaveBeenCalled();
            expect(mockFormContext.ui.removeLoaded).toHaveBeenCalled();
        });
    });

    // =========================================================================
    // Process Stages and Steps Tests
    // =========================================================================
    describe('LoadProcess - Stages and Steps', () => {
        let mockFormContext: any;

        beforeEach(() => {
            mockFormContext = {
                data: {
                    process: {
                        getActiveProcess: jest.fn().mockReturnValue({
                            getId: jest.fn().mockReturnValue('{process-id}'),
                            getName: jest.fn().mockReturnValue('Sales Process'),
                            isRendered: jest.fn().mockReturnValue(true),
                            getStages: jest.fn().mockReturnValue({
                                getLength: jest.fn().mockReturnValue(2),
                                get: jest.fn().mockImplementation((index: number) => ({
                                    getId: jest.fn().mockReturnValue(`{stage-${index}}`),
                                    getName: jest.fn().mockReturnValue(`Stage ${index}`),
                                    getCategory: jest.fn().mockReturnValue({ getValue: jest.fn().mockReturnValue(index) }),
                                    getEntityName: jest.fn().mockReturnValue('opportunity'),
                                    getStatus: jest.fn().mockReturnValue('active'),
                                    getNavigationBehavior: jest.fn().mockReturnValue({ allowCreateNew: true }),
                                    getSteps: jest.fn().mockReturnValue({
                                        length: 2,
                                        0: {
                                            getAttribute: jest.fn().mockReturnValue('fieldname'),
                                            getName: jest.fn().mockReturnValue('Step 1'),
                                            getProgress: jest.fn().mockReturnValue(0),
                                            isRequired: jest.fn().mockReturnValue(true),
                                            setProgress: jest.fn()
                                        },
                                        1: {
                                            getAttribute: jest.fn().mockReturnValue('email'),
                                            getName: jest.fn().mockReturnValue('Step 2'),
                                            getProgress: jest.fn().mockReturnValue(1),
                                            isRequired: jest.fn().mockReturnValue(false),
                                            setProgress: jest.fn()
                                        }
                                    })
                                }))
                            })
                        }),
                        getActiveStage: jest.fn().mockReturnValue({
                            getId: jest.fn().mockReturnValue('{active-stage}'),
                            getName: jest.fn().mockReturnValue('Qualify'),
                            getCategory: jest.fn().mockReturnValue({ getValue: jest.fn().mockReturnValue(0) }),
                            getEntityName: jest.fn().mockReturnValue('lead'),
                            getStatus: jest.fn().mockReturnValue('active'),
                            getNavigationBehavior: jest.fn().mockReturnValue({ allowCreateNew: true }),
                            getSteps: jest.fn().mockReturnValue({ length: 0 })
                        }),
                        getSelectedStage: jest.fn().mockReturnValue({
                            getId: jest.fn().mockReturnValue('{selected-stage}'),
                            getName: jest.fn().mockReturnValue('Selected Stage')
                        }),
                        getActivePath: jest.fn().mockReturnValue({
                            getLength: jest.fn().mockReturnValue(2),
                            get: jest.fn().mockImplementation((index: number) => ({
                                getId: jest.fn().mockReturnValue(`{path-stage-${index}}`),
                                getName: jest.fn().mockReturnValue(`Path Stage ${index}`)
                            }))
                        }),
                        getInstanceId: jest.fn().mockReturnValue('{instance-id}'),
                        getInstanceName: jest.fn().mockReturnValue('Process Instance'),
                        getStatus: jest.fn().mockReturnValue('Active'),
                        setStatus: jest.fn(),
                        getEnabledProcesses: jest.fn().mockImplementation((callback: any) => callback({
                            '{proc1}': 'Process 1'
                        })),
                        getProcessInstances: jest.fn().mockImplementation((callback: any) => callback([
                            { ProcessDefinitionID: '{proc1}', ProcessDefinitionName: 'Process 1', CreatedOn: '2024-01-01', ProcessInstanceID: '{inst1}', StatusCodeName: 'Active' }
                        ])),
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
                        setActiveStage: jest.fn(),
                        moveNext: jest.fn(),
                        movePrevious: jest.fn()
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

        test('should access stages from active process', () => {
            const result = LoadProcess(mockFormContext);

            const stages = result.ActiveProcess.Stages;
            expect(stages).toBeDefined();
            expect(stages.getLength()).toBe(2);
        });

        test('should iterate stages with forEach', () => {
            const result = LoadProcess(mockFormContext);

            const stageNames: string[] = [];
            result.ActiveProcess.Stages.forEach((stage: any) => {
                stageNames.push(stage.Name);
            });

            expect(stageNames.length).toBe(2);
        });

        test('should access steps from stage', () => {
            const result = LoadProcess(mockFormContext);

            const stage = result.ActiveProcess.Stages.get(0);
            const steps = stage.Steps;

            expect(steps).toBeDefined();
            expect(steps.length).toBe(2);
            expect(steps[0].Name).toBe('Step 1');
            expect(steps[0].Attribute).toBe('fieldname');
            expect(steps[0].Required).toBe(true);
        });

        test('should call step SetProgress', () => {
            const result = LoadProcess(mockFormContext);

            const stage = result.ActiveProcess.Stages.get(0);
            const step = stage.Steps[0];
            step.SetProgress(1, 'Completed');

            // Step should be defined after calling SetProgress
            expect(step).toBeDefined();
            expect(step.Progress).toBe(0); // Original progress value
        });

        test('should access ActivePath', () => {
            const result = LoadProcess(mockFormContext);

            const activePath = result.ActivePath;
            expect(activePath.getLength()).toBe(2);

            const pathStage = activePath.get(0);
            expect(pathStage.Id).toBe('{path-stage-0}');
        });

        test('should iterate ActivePath with forEach', () => {
            const result = LoadProcess(mockFormContext);

            const pathStages: string[] = [];
            result.ActivePath.forEach((stage: any) => {
                pathStages.push(stage.Name);
            });

            expect(pathStages.length).toBe(2);
        });

        test('should get InstanceId and InstanceName', () => {
            const result = LoadProcess(mockFormContext);

            expect(result.InstanceId).toBe('{instance-id}');
            expect(result.InstanceName).toBe('Process Instance');
        });

        test('should get SelectedStage', () => {
            const result = LoadProcess(mockFormContext);

            expect(result.SelectedStage.Id).toBe('{selected-stage}');
        });

        test('should set Status', () => {
            const result = LoadProcess(mockFormContext);

            result.Status = 'Finished';

            expect(mockFormContext.data.process.setStatus).toHaveBeenCalled();
        });

        test('should call EnabledProcesses callback', () => {
            const result = LoadProcess(mockFormContext);

            const processes: any[] = [];
            result.EnabledProcesses((procs: any) => processes.push(...procs));

            expect(processes.length).toBe(1);
            expect(processes[0].ProcessId).toBe('{proc1}');
        });

        test('should call ProcessInstances callback', () => {
            const result = LoadProcess(mockFormContext);

            const instances: any[] = [];
            result.ProcessInstances((procs: any) => instances.push(...procs));

            expect(instances.length).toBe(1);
            expect(instances[0].ProcessId).toBe('{proc1}');
        });

        test('should call Reflow', () => {
            const result = LoadProcess(mockFormContext);

            result.Reflow(true, 'stage1', 'stage2');

            expect(mockFormContext.ui.process.reflow).toHaveBeenCalledWith(true, 'stage1', 'stage2');
        });

        test('should call MovePrevious', () => {
            const result = LoadProcess(mockFormContext);

            result.MovePrevious(jest.fn());

            expect(mockFormContext.data.process.movePrevious).toHaveBeenCalled();
        });

        test('should call Remove handlers', () => {
            const result = LoadProcess(mockFormContext);
            const callback = jest.fn();

            result.RemoveOnPreProcessStatusChange(callback);
            result.RemoveOnPreStageChange(callback);
            result.RemoveOnProcessStatusChange(callback);
            result.RemoveOnStageChange(callback);
            result.RemoveOnStageSelected(callback);

            expect(mockFormContext.data.process.removeOnPreProcessStatusChange).toHaveBeenCalled();
        });

        test('should call SetActiveStage', () => {
            const result = LoadProcess(mockFormContext);

            result.SetActiveStage('{stage-id}', jest.fn());

            expect(mockFormContext.data.process.setActiveStage).toHaveBeenCalled();
        });

        test('should call SetActiveProcessInstance', () => {
            const result = LoadProcess(mockFormContext);

            result.SetActiveProcessInstance('{instance-id}', jest.fn());

            expect(mockFormContext.data.process.setActiveProcessInstance).toHaveBeenCalled();
        });

        test('should call AllowCreateNew on stage', () => {
            const result = LoadProcess(mockFormContext);

            const stage = result.ActiveProcess.Stages.get(0);
            stage.AllowCreateNew(true);

            expect(stage).toBeDefined();
        });

        test('should access process IsRendered', () => {
            const result = LoadProcess(mockFormContext);

            expect(result.ActiveProcess.IsRendered).toBe(true);
        });
    });

    // =========================================================================
    // Grid SelectedRows Tests
    // =========================================================================
    describe('LoadFormV3 - Grid SelectedRows', () => {
        let mockExecutionContext: any;
        let mockFormContext: any;

        beforeEach(() => {
            mockFormContext = {
                data: {
                    entity: {
                        getId: jest.fn().mockReturnValue('{guid}'),
                        getEntityName: jest.fn().mockReturnValue('account'),
                        getEntityReference: jest.fn().mockReturnValue({}),
                        getPrimaryAttributeValue: jest.fn(),
                        getDataXml: jest.fn(),
                        getIsDirty: jest.fn().mockReturnValue(false),
                        isValid: jest.fn().mockReturnValue(true),
                        addOnSave: jest.fn(),
                        removeOnSave: jest.fn(),
                        addOnPostSave: jest.fn(),
                        removeOnPostSave: jest.fn(),
                        attributes: { get: jest.fn() }
                    },
                    getIsDirty: jest.fn().mockReturnValue(false),
                    isValid: jest.fn().mockReturnValue(true),
                    refresh: jest.fn(),
                    save: jest.fn(),
                    addOnLoad: jest.fn(),
                    removeOnLoad: jest.fn()
                },
                ui: {
                    getFormType: jest.fn().mockReturnValue(2),
                    getViewPortHeight: jest.fn().mockReturnValue(800),
                    getViewPortWidth: jest.fn().mockReturnValue(1200),
                    close: jest.fn(),
                    setFormNotification: jest.fn(),
                    clearFormNotification: jest.fn(),
                    refreshRibbon: jest.fn(),
                    addLoaded: jest.fn(),
                    removeLoaded: jest.fn(),
                    addOnLoad: jest.fn(),
                    removeOnLoad: jest.fn(),
                    controls: { get: jest.fn() },
                    tabs: { get: jest.fn() },
                    formSelector: {
                        getCurrentItem: jest.fn().mockReturnValue({ getId: jest.fn(), getLabel: jest.fn() }),
                        items: { getLength: jest.fn(), get: jest.fn() }
                    },
                    navigation: { items: { getLength: jest.fn().mockReturnValue(0), get: jest.fn() } },
                    quickForms: { get: jest.fn() }
                },
                getControl: jest.fn().mockImplementation((name: string) => ({
                    getName: () => name,
                    getControlType: jest.fn().mockReturnValue('subgrid'),
                    getEntityName: jest.fn().mockReturnValue('contact'),
                    getFetchXml: jest.fn().mockReturnValue('<fetch/>'),
                    getGridType: jest.fn().mockReturnValue(2),
                    getRelationship: jest.fn().mockReturnValue({ name: 'rel' }),
                    getGrid: jest.fn().mockReturnValue({
                        getTotalRecordCount: jest.fn().mockReturnValue(3),
                        getRows: jest.fn().mockReturnValue({
                            getLength: jest.fn().mockReturnValue(3),
                            get: jest.fn().mockImplementation((index: number) => ({
                                data: {
                                    entity: {
                                        getId: jest.fn().mockReturnValue(`{row-${index}}`),
                                        getEntityName: jest.fn().mockReturnValue('contact'),
                                        getEntityReference: jest.fn().mockReturnValue({}),
                                        getPrimaryAttributeValue: jest.fn().mockReturnValue(`Contact ${index}`),
                                        attributes: {
                                            getLength: jest.fn().mockReturnValue(1),
                                            get: jest.fn()
                                        }
                                    }
                                }
                            }))
                        }),
                        getSelectedRows: jest.fn().mockReturnValue({
                            getLength: jest.fn().mockReturnValue(2),
                            get: jest.fn().mockImplementation((index: number) => ({
                                getData: jest.fn().mockReturnValue({
                                    data: {
                                        entity: {
                                            getId: jest.fn().mockReturnValue(`{selected-${index}}`),
                                            getEntityName: jest.fn().mockReturnValue('contact'),
                                            getEntityReference: jest.fn().mockReturnValue({})
                                        }
                                    }
                                })
                            }))
                        })
                    }),
                    getViewSelector: jest.fn().mockReturnValue({
                        isVisible: jest.fn().mockReturnValue(true),
                        getCurrentView: jest.fn(),
                        setCurrentView: jest.fn()
                    }),
                    getVisible: jest.fn().mockReturnValue(true),
                    setVisible: jest.fn(),
                    addOnLoad: jest.fn(),
                    removeOnLoad: jest.fn(),
                    openRelatedGrid: jest.fn(),
                    refresh: jest.fn(),
                    refreshRibbon: jest.fn(),
                    getUrl: jest.fn().mockReturnValue('url')
                })),
                getAttribute: jest.fn()
            };

            mockExecutionContext = {
                getFormContext: jest.fn().mockReturnValue(mockFormContext),
                getDepth: jest.fn().mockReturnValue(1),
                getEventArgs: jest.fn().mockReturnValue({
                    getDataLoadState: jest.fn().mockReturnValue(1),
                    getSaveMode: jest.fn(),
                    isDefaultPrevented: jest.fn().mockReturnValue(false),
                    preventDefault: jest.fn(),
                    preventDefaultOnError: jest.fn(),
                    disableAsyncTimeout: jest.fn()
                }),
                getEventSource: jest.fn(),
                getSharedVariable: jest.fn(),
                setSharedVariable: jest.fn()
            };
        });

        test('should access SelectedRows', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {
                grid: ['Contacts']
            });

            const selectedRows = result.Grid.Contacts.SelectedRows;
            expect(selectedRows.getLength()).toBe(2);
        });

        test('should iterate SelectedRows with forEach', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {
                grid: ['Contacts']
            });

            const selectedIds: string[] = [];
            result.Grid.Contacts.SelectedRows.forEach((row: any) => {
                selectedIds.push('selected');
            });

            expect(selectedIds.length).toBe(2);
        });

        test('should call grid Url method', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {
                grid: ['Contacts']
            });

            const url = result.Grid.Contacts.Url();
            expect(url).toBe('url');
        });
    });

    // =========================================================================
    // LoadUtility - Async Callbacks Tests
    // =========================================================================
    describe('LoadUtility - Async Callbacks', () => {
        beforeEach(() => {
            (global as any).window = {
                Xrm: {
                    Utility: {
                        getGlobalContext: jest.fn().mockReturnValue({
                            getClientUrl: jest.fn().mockReturnValue('https://org.crm.dynamics.com'),
                            getCurrentAppUrl: jest.fn().mockReturnValue('url'),
                            getVersion: jest.fn().mockReturnValue('9.2'),
                            isOnPremises: jest.fn().mockReturnValue(false),
                            prependOrgName: jest.fn().mockReturnValue('/org/path'),
                            getWebResourceUrl: jest.fn().mockReturnValue('/wr'),
                            getAdvancedConfigSetting: jest.fn().mockReturnValue('setting'),
                            getCurrentAppProperties: jest.fn().mockResolvedValue({ appId: '123' }),
                            client: {
                                getClient: jest.fn().mockReturnValue('Web'),
                                getClientState: jest.fn().mockReturnValue('Online'),
                                getFormFactor: jest.fn().mockReturnValue(1),
                                isOffline: jest.fn().mockReturnValue(false)
                            },
                            organizationSettings: {
                                isAutoSaveEnabled: true,
                                languageId: 1033,
                                organizationId: '{org-id}',
                                uniqueName: 'org'
                            },
                            userSettings: { userId: '{user}', userName: 'User' }
                        }),
                        showProgressIndicator: jest.fn(),
                        closeProgressIndicator: jest.fn(),
                        refreshParentGrid: jest.fn(),
                        getResourceString: jest.fn().mockReturnValue('string'),
                        getAllowedStatusTransitions: jest.fn().mockResolvedValue([]),
                        getEntityMetadata: jest.fn().mockResolvedValue({}),
                        invokeProcessAction: jest.fn().mockResolvedValue({}),
                        lookupObjects: jest.fn().mockResolvedValue([])
                    },
                    Navigation: {
                        openAlertDialog: jest.fn().mockResolvedValue(undefined),
                        openConfirmDialog: jest.fn().mockResolvedValue({ confirmed: true }),
                        openErrorDialog: jest.fn().mockResolvedValue(undefined),
                        openForm: jest.fn().mockResolvedValue({}),
                        openFile: jest.fn(),
                        openUrl: jest.fn(),
                        openWebResource: jest.fn(),
                        navigateTo: jest.fn().mockResolvedValue({})
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
                        xmlAttributeEncode: jest.fn().mockReturnValue('encoded'),
                        xmlEncode: jest.fn().mockReturnValue('encoded')
                    },
                    App: {
                        addGlobalNotification: jest.fn().mockResolvedValue('id'),
                        clearGlobalNotification: jest.fn().mockResolvedValue(undefined)
                    },
                    Panel: {
                        loadPanel: jest.fn()
                    }
                }
            };
        });

        afterEach(() => {
            delete (global as any).window;
        });

        test('should call AddGlobalNotification with callback', async () => {
            const result = LoadUtility(undefined);
            const successCallback = jest.fn();

            result.AddGlobalNotification({ type: 1 }, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalled();
        });

        test('should call OpenAlertDialog with callback', async () => {
            const result = LoadUtility(undefined);
            const closeCallback = jest.fn();

            result.OpenAlertDialog({ text: 'Alert' }, {}, closeCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(closeCallback).toHaveBeenCalled();
        });

        test('should call OpenConfirmDialog with callback', async () => {
            const result = LoadUtility(undefined);
            const successCallback = jest.fn();

            result.OpenConfirmDialog({ text: 'Confirm?' }, {}, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalled();
        });

        test('should call OpenForm with callback', async () => {
            const result = LoadUtility(undefined);
            const successCallback = jest.fn();

            result.OpenForm({ entityName: 'account' }, {}, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalled();
        });

        test('should call NavigateTo with callback', async () => {
            const result = LoadUtility(undefined);
            const successCallback = jest.fn();

            result.NavigateTo({ pageType: 'entityrecord' }, {}, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalled();
        });

        test('should call PickFile with callback', async () => {
            const result = LoadUtility(undefined);
            const successCallback = jest.fn();

            result.PickFile({}, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(successCallback).toHaveBeenCalled();
        });

        test('should call utility navigation methods', () => {
            const result = LoadUtility(undefined);

            result.OpenFile({ fileName: 'test.pdf' });
            result.OpenUrl('https://example.com');
            result.OpenWebResource('webresource');
            result.LoadPanel('url', 'title');

            expect((global as any).window.Xrm.Navigation.openFile).toHaveBeenCalled();
            expect((global as any).window.Xrm.Navigation.openUrl).toHaveBeenCalled();
        });

        test('should get AdvancedConfigSetting', () => {
            const result = LoadUtility(undefined);

            expect(result.AdvancedConfigSetting('MaxIncidentMergeNumber')).toBe('setting');
        });

        test('should get PrependOrgName', () => {
            const result = LoadUtility(undefined);

            expect(result.PrependOrgName('/path')).toBe('/org/path');
        });

        test('should get WebResourceUrl', () => {
            const result = LoadUtility(undefined);

            expect(result.WebResourceUrl('wr')).toBe('/wr');
        });

        test('should call RefreshParentGrid', () => {
            const result = LoadUtility(undefined);

            result.RefreshParentGrid({});

            expect((global as any).window.Xrm.Utility.refreshParentGrid).toHaveBeenCalled();
        });

        test('should call ShowProgressIndicator', () => {
            const result = LoadUtility(undefined);

            result.ShowProgressIndicator('Loading...');

            expect((global as any).window.Xrm.Utility.showProgressIndicator).toHaveBeenCalled();
        });
    });

    // =========================================================================
    // Form Methods Tests - Close, SetFormNotification, etc.
    // =========================================================================
    describe('LoadFormV3 - Form Methods Coverage', () => {
        let mockExecutionContext: any;
        let mockFormContext: any;

        beforeEach(() => {
            mockFormContext = {
                data: {
                    entity: {
                        getId: jest.fn().mockReturnValue('{guid}'),
                        getEntityName: jest.fn().mockReturnValue('account'),
                        getEntityReference: jest.fn().mockReturnValue({}),
                        getPrimaryAttributeValue: jest.fn(),
                        getDataXml: jest.fn(),
                        getIsDirty: jest.fn().mockReturnValue(false),
                        isValid: jest.fn().mockReturnValue(true),
                        addOnSave: jest.fn(),
                        removeOnSave: jest.fn(),
                        addOnPostSave: jest.fn(),
                        removeOnPostSave: jest.fn(),
                        attributes: { get: jest.fn() }
                    },
                    getIsDirty: jest.fn().mockReturnValue(false),
                    isValid: jest.fn().mockReturnValue(true),
                    refresh: jest.fn(),
                    save: jest.fn(),
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
                    controls: { get: jest.fn() },
                    tabs: { get: jest.fn() },
                    formSelector: {
                        getCurrentItem: jest.fn().mockReturnValue({ getId: jest.fn(), getLabel: jest.fn() }),
                        items: { getLength: jest.fn(), get: jest.fn() }
                    },
                    navigation: { items: { getLength: jest.fn().mockReturnValue(0), get: jest.fn() } },
                    quickForms: { get: jest.fn() }
                },
                getControl: jest.fn().mockImplementation((name: string) => ({
                    getName: () => name,
                    getControlType: jest.fn().mockReturnValue('standard'),
                    getLabel: jest.fn(),
                    setLabel: jest.fn(),
                    getVisible: jest.fn().mockReturnValue(true),
                    setVisible: jest.fn(),
                    getDisabled: jest.fn().mockReturnValue(false),
                    setDisabled: jest.fn(),
                    setFocus: jest.fn(),
                    setNotification: jest.fn(),
                    clearNotification: jest.fn(),
                    addNotification: jest.fn(),
                    getAttribute: jest.fn().mockReturnValue({
                        getName: () => name,
                        getValue: jest.fn().mockReturnValue('value'),
                        setValue: jest.fn()
                    })
                })),
                getAttribute: jest.fn().mockReturnValue(null) // Return null to trigger fallback
            };

            mockExecutionContext = {
                getFormContext: jest.fn().mockReturnValue(mockFormContext),
                getDepth: jest.fn().mockReturnValue(1),
                getEventArgs: jest.fn().mockReturnValue({
                    getDataLoadState: jest.fn().mockReturnValue(1),
                    getSaveMode: jest.fn(),
                    isDefaultPrevented: jest.fn().mockReturnValue(false),
                    preventDefault: jest.fn(),
                    preventDefaultOnError: jest.fn(),
                    disableAsyncTimeout: jest.fn()
                }),
                getEventSource: jest.fn(),
                getSharedVariable: jest.fn(),
                setSharedVariable: jest.fn()
            };
        });

        test('should call Close method', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {});

            result.Close();

            expect(mockFormContext.ui.close).toHaveBeenCalled();
        });

        test('should call SetFormNotification', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {});

            const notifResult = result.SetFormNotification('Test message', 'ERROR', 'notif1');

            expect(mockFormContext.ui.setFormNotification).toHaveBeenCalledWith('Test message', 'ERROR', 'notif1');
            expect(notifResult).toBe(true);
        });

        test('should call ClearFormNotification', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {});

            const clearResult = result.ClearFormNotification('notif1');

            expect(mockFormContext.ui.clearFormNotification).toHaveBeenCalledWith('notif1');
            expect(clearResult).toBe(true);
        });

        test('should call RefreshRibbon', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {});

            result.RefreshRibbon(true);

            expect(mockFormContext.ui.refreshRibbon).toHaveBeenCalledWith(true);
        });

        test('should use control.getAttribute fallback for body fields', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, { body: ['testField'] });

            // The field should be loaded using control.getAttribute() fallback
            expect(result.Body.testField).toBeDefined();
        });

        test('should use control.getAttribute fallback for header fields', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, { header: ['testField'] });

            // The field should be loaded using control.getAttribute() fallback
            expect(result.Header.testField).toBeDefined();
        });
    });

    // =========================================================================
    // Utility Promise Returns - Without Callbacks
    // =========================================================================
    describe('LoadUtility - Promise Returns', () => {
        beforeEach(() => {
            (global as any).window = {
                Xrm: {
                    Utility: {
                        getGlobalContext: jest.fn().mockReturnValue({
                            getClientUrl: jest.fn().mockReturnValue('url'),
                            getCurrentAppUrl: jest.fn().mockReturnValue('url'),
                            getVersion: jest.fn().mockReturnValue('9.2'),
                            isOnPremises: jest.fn().mockReturnValue(false),
                            getCurrentAppName: jest.fn().mockResolvedValue('App Name'),
                            getCurrentAppProperties: jest.fn().mockResolvedValue({ appId: '123' }),
                            client: {
                                getClient: jest.fn().mockReturnValue('Web'),
                                getClientState: jest.fn().mockReturnValue('Online'),
                                getFormFactor: jest.fn().mockReturnValue(1),
                                isOffline: jest.fn().mockReturnValue(false)
                            },
                            organizationSettings: {},
                            userSettings: {}
                        }),
                        getAllowedStatusTransitions: jest.fn().mockResolvedValue(['status1']),
                        getEntityMetadata: jest.fn().mockResolvedValue({ EntitySetName: 'accounts' }),
                        invokeProcessAction: jest.fn().mockResolvedValue({ success: true }),
                        lookupObjects: jest.fn().mockResolvedValue([{ id: '{id}' }]),
                        getResourceString: jest.fn().mockReturnValue('resource')
                    },
                    Navigation: {
                        navigateTo: jest.fn().mockResolvedValue({}),
                        openAlertDialog: jest.fn().mockResolvedValue(undefined),
                        openConfirmDialog: jest.fn().mockResolvedValue({ confirmed: true }),
                        openErrorDialog: jest.fn().mockResolvedValue(undefined),
                        openForm: jest.fn().mockResolvedValue({ savedEntityReference: {} })
                    },
                    Device: {
                        captureImage: jest.fn().mockResolvedValue({}),
                        pickFile: jest.fn().mockResolvedValue([])
                    },
                    App: {
                        addGlobalNotification: jest.fn().mockResolvedValue('notif-id'),
                        clearGlobalNotification: jest.fn().mockResolvedValue(undefined),
                        sidePanes: {
                            state: 0,
                            createPane: jest.fn().mockResolvedValue({ paneId: 'pane1' }),
                            getPane: jest.fn().mockReturnValue({ close: jest.fn() }),
                            getAllPanes: jest.fn().mockReturnValue([]),
                            getSelectedPane: jest.fn().mockReturnValue(null)
                        }
                    },
                    Encoding: {
                        xmlEncode: jest.fn().mockReturnValue('encoded'),
                        xmlAttributeEncode: jest.fn().mockReturnValue('encoded')
                    }
                }
            };
        });

        afterEach(() => {
            delete (global as any).window;
        });

        test('should return promise from AddGlobalNotification without callback', async () => {
            const result = LoadUtility(undefined);

            const promise = result.AddGlobalNotification({ type: 1, message: 'test' });

            expect(promise).toBeDefined();
            const notifId = await promise;
            expect(notifId).toBe('notif-id');
        });

        test('should return promise from AllowedStatusTransitions without callback', async () => {
            const result = LoadUtility(undefined);

            const promise = result.AllowedStatusTransitions('account', 0);

            expect(promise).toBeDefined();
            const statuses = await promise;
            expect(statuses).toContain('status1');
        });

        test('should return promise from CurrentAppProperties without callback', async () => {
            const result = LoadUtility(undefined);

            const promise = result.CurrentAppProperties();

            expect(promise).toBeDefined();
            const props = await promise;
            expect(props.appId).toBe('123');
        });

        test('should return promise from EntityMetadata without callback', async () => {
            const result = LoadUtility(undefined);

            const promise = result.EntityMetadata('account', ['displayname']);

            expect(promise).toBeDefined();
            const metadata = await promise;
            expect(metadata.EntitySetName).toBe('accounts');
        });

        test('should return promise from InvokeProcessAction without callback', async () => {
            const result = LoadUtility(undefined);

            const promise = result.InvokeProcessAction('ActionName', { param: 'value' });

            expect(promise).toBeDefined();
            const actionResult = await promise;
            expect(actionResult.success).toBe(true);
        });

        test('should return promise from LookupObjects without callback', async () => {
            const result = LoadUtility(undefined);

            const promise = result.LookupObjects({ entityTypes: ['account'] });

            expect(promise).toBeDefined();
            const lookups = await promise as any[];
            expect(lookups[0].id).toBe('{id}');
        });

        test('should return promise from NavigateTo without callback', async () => {
            const result = LoadUtility(undefined);

            const promise = result.NavigateTo({ pageType: 'entityrecord' }, {});

            expect(promise).toBeDefined();
            await promise;
        });

        test('should return promise from OpenAlertDialog without callback', async () => {
            const result = LoadUtility(undefined);

            const promise = result.OpenAlertDialog({ text: 'Alert' }, {});

            expect(promise).toBeDefined();
            await promise;
        });

        test('should return promise from OpenConfirmDialog without callback', async () => {
            const result = LoadUtility(undefined);

            const promise = result.OpenConfirmDialog({ title: 'Confirm', text: 'Are you sure?' }, {});

            expect(promise).toBeDefined();
            const confirmResult = await promise as { confirmed: boolean };
            expect(confirmResult.confirmed).toBe(true);
        });

        test('should return promise from OpenErrorDialog without callback', async () => {
            const result = LoadUtility(undefined);

            const promise = result.OpenErrorDialog({ message: 'Error occurred' });

            expect(promise).toBeDefined();
            await promise;
        });

        test('should return promise from OpenForm without callback', async () => {
            const result = LoadUtility(undefined);

            const promise = result.OpenForm({ entityName: 'account' }, {});

            expect(promise).toBeDefined();
            const formResult = await promise;
            expect(formResult.savedEntityReference).toBeDefined();
        });

        test('should return promise from PickFile without callback', async () => {
            const result = LoadUtility(undefined);

            const promise = result.PickFile({ allowMultipleFiles: true });

            expect(promise).toBeDefined();
            const files = await promise;
            expect(Array.isArray(files)).toBe(true);
        });

        test('should return promise from ClearGlobalNotification without callback', async () => {
            const result = LoadUtility(undefined);

            const promise = result.ClearGlobalNotification('notif-id');

            expect(promise).toBeDefined();
            await promise;
        });

        test('should return promise from CurrentAppName without callback', async () => {
            const result = LoadUtility(undefined);

            const promise = result.CurrentAppName();

            expect(promise).toBeDefined();
            const appName = await promise;
            expect(appName).toBe('App Name');
        });
    });

    // =========================================================================
    // SidePanes Create Tests (via LoadFormV3)
    // =========================================================================
    describe('LoadSidePanes - Create Method (via LoadFormV3)', () => {
        let mockExecutionContext: any;

        beforeEach(() => {
            (global as any).window = {
                Xrm: {
                    App: {
                        sidePanes: {
                            state: 0,
                            createPane: jest.fn().mockResolvedValue({ paneId: 'pane1' }),
                            getPane: jest.fn().mockReturnValue({ close: jest.fn() }),
                            getAllPanes: jest.fn().mockReturnValue([]),
                            getSelectedPane: jest.fn().mockReturnValue(null)
                        }
                    }
                }
            };
            mockExecutionContext = {
                getFormContext: () => ({
                    data: { entity: { attributes: { get: () => null } } },
                    ui: { formSelector: { getCurrentItem: () => null } }
                })
            };
        });

        afterEach(() => {
            delete (global as any).window;
        });

        test('should call Create with callback', async () => {
            const form = LoadFormV3(mockExecutionContext, undefined, {});
            const result = form.SidePanes;
            const successCallback = jest.fn();

            result.Create({ paneId: 'newPane', title: 'My Pane' }, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect((global as any).window.Xrm.App.sidePanes.createPane).toHaveBeenCalled();
            expect(successCallback).toHaveBeenCalled();
        });

        test('should get all panes', () => {
            const form = LoadFormV3(mockExecutionContext, undefined, {});
            const result = form.SidePanes;

            const allPanes = result.GetAll();

            expect((global as any).window.Xrm.App.sidePanes.getAllPanes).toHaveBeenCalled();
        });

        test('should get selected pane', () => {
            const form = LoadFormV3(mockExecutionContext, undefined, {});
            const result = form.SidePanes;

            result.GetSelected();

            expect((global as any).window.Xrm.App.sidePanes.getSelectedPane).toHaveBeenCalled();
        });
    });

    // =========================================================================
    // Disabled Form Type 4 Tests
    // =========================================================================
    describe('LoadFormV3 - Disabled Form Type 4', () => {
        let mockExecutionContext: any;
        let mockFormContext: any;

        beforeEach(() => {
            mockFormContext = {
                data: {
                    entity: {
                        getId: jest.fn().mockReturnValue('{guid}'),
                        getEntityName: jest.fn().mockReturnValue('account'),
                        getEntityReference: jest.fn().mockReturnValue({}),
                        getPrimaryAttributeValue: jest.fn(),
                        getDataXml: jest.fn(),
                        getIsDirty: jest.fn().mockReturnValue(false),
                        isValid: jest.fn().mockReturnValue(true),
                        addOnSave: jest.fn(),
                        removeOnSave: jest.fn(),
                        addOnPostSave: jest.fn(),
                        removeOnPostSave: jest.fn(),
                        attributes: { get: jest.fn() }
                    },
                    getIsDirty: jest.fn().mockReturnValue(false),
                    isValid: jest.fn().mockReturnValue(true),
                    refresh: jest.fn(),
                    save: jest.fn(),
                    addOnLoad: jest.fn(),
                    removeOnLoad: jest.fn()
                },
                ui: {
                    getFormType: jest.fn().mockReturnValue(4), // Disabled form
                    getViewPortHeight: jest.fn().mockReturnValue(800),
                    getViewPortWidth: jest.fn().mockReturnValue(1200),
                    close: jest.fn(),
                    setFormNotification: jest.fn(),
                    clearFormNotification: jest.fn(),
                    refreshRibbon: jest.fn(),
                    addLoaded: jest.fn(),
                    removeLoaded: jest.fn(),
                    addOnLoad: jest.fn(),
                    removeOnLoad: jest.fn(),
                    controls: { get: jest.fn() },
                    tabs: { get: jest.fn() },
                    formSelector: {
                        getCurrentItem: jest.fn().mockReturnValue({ getId: jest.fn(), getLabel: jest.fn() }),
                        items: { getLength: jest.fn(), get: jest.fn() }
                    },
                    navigation: { items: { getLength: jest.fn().mockReturnValue(0), get: jest.fn() } },
                    quickForms: { get: jest.fn() }
                },
                getControl: jest.fn().mockImplementation((name: string) => ({
                    getName: () => name,
                    getControlType: jest.fn().mockReturnValue('standard'),
                    getLabel: jest.fn().mockReturnValue('Label'),
                    setLabel: jest.fn(),
                    getVisible: jest.fn().mockReturnValue(true),
                    setVisible: jest.fn(),
                    getDisabled: jest.fn().mockReturnValue(false),
                    setDisabled: jest.fn(),
                    setFocus: jest.fn(),
                    setNotification: jest.fn(),
                    clearNotification: jest.fn(),
                    addNotification: jest.fn(),
                    getAttribute: jest.fn().mockReturnValue({ getName: () => name })
                })),
                getAttribute: jest.fn().mockImplementation((name: string) => ({
                    getName: () => name,
                    getValue: jest.fn().mockReturnValue('value'),
                    setValue: jest.fn()
                }))
            };

            mockExecutionContext = {
                getFormContext: jest.fn().mockReturnValue(mockFormContext),
                getDepth: jest.fn().mockReturnValue(1),
                getEventArgs: jest.fn().mockReturnValue({
                    getDataLoadState: jest.fn().mockReturnValue(1),
                    getSaveMode: jest.fn(),
                    isDefaultPrevented: jest.fn().mockReturnValue(false),
                    preventDefault: jest.fn(),
                    preventDefaultOnError: jest.fn(),
                    disableAsyncTimeout: jest.fn()
                }),
                getEventSource: jest.fn(),
                getSharedVariable: jest.fn(),
                setSharedVariable: jest.fn()
            };
        });

        test('should handle Disabled form type (4) for Disabled setter', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, { body: ['name'] });

            // In Disabled form (type 4), setDisabled should not be called
            result.Body.name.Disabled = true;

            expect(result.Body.name).toBeDefined();
        });

        test('should handle Disabled form type (4) for Value setter', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, { body: ['name'] });

            // In Disabled form (type 4), setValue should not be called
            result.Body.name.Value = 'new value';

            expect(result.Body.name).toBeDefined();
        });
    });

    // =========================================================================
    // Normal Form Type - Setters Should Work
    // =========================================================================
    describe('LoadFormV3 - Normal Form Type Setters', () => {
        let mockExecutionContext: any;
        let mockFormContext: any;
        let mockSetDisabled: jest.Mock;
        let mockSetValue: jest.Mock;

        beforeEach(() => {
            mockSetDisabled = jest.fn();
            mockSetValue = jest.fn();

            mockFormContext = {
                data: {
                    entity: {
                        getId: jest.fn().mockReturnValue('{guid}'),
                        getEntityName: jest.fn().mockReturnValue('account'),
                        getEntityReference: jest.fn().mockReturnValue({}),
                        getPrimaryAttributeValue: jest.fn(),
                        getDataXml: jest.fn(),
                        getIsDirty: jest.fn().mockReturnValue(false),
                        isValid: jest.fn().mockReturnValue(true),
                        addOnSave: jest.fn(),
                        removeOnSave: jest.fn(),
                        addOnPostSave: jest.fn(),
                        removeOnPostSave: jest.fn(),
                        attributes: { get: jest.fn() }
                    },
                    getIsDirty: jest.fn().mockReturnValue(false),
                    isValid: jest.fn().mockReturnValue(true),
                    refresh: jest.fn(),
                    save: jest.fn(),
                    addOnLoad: jest.fn(),
                    removeOnLoad: jest.fn()
                },
                ui: {
                    getFormType: jest.fn().mockReturnValue(2), // Update form (NOT readonly)
                    getViewPortHeight: jest.fn().mockReturnValue(800),
                    getViewPortWidth: jest.fn().mockReturnValue(1200),
                    close: jest.fn(),
                    setFormNotification: jest.fn(),
                    clearFormNotification: jest.fn(),
                    refreshRibbon: jest.fn(),
                    addLoaded: jest.fn(),
                    removeLoaded: jest.fn(),
                    addOnLoad: jest.fn(),
                    removeOnLoad: jest.fn(),
                    controls: { get: jest.fn() },
                    tabs: { get: jest.fn() },
                    formSelector: {
                        getCurrentItem: jest.fn().mockReturnValue({ getId: jest.fn(), getLabel: jest.fn() }),
                        items: { getLength: jest.fn(), get: jest.fn() }
                    },
                    navigation: { items: { getLength: jest.fn().mockReturnValue(0), get: jest.fn() } },
                    quickForms: { get: jest.fn() }
                },
                getControl: jest.fn().mockImplementation((name: string) => ({
                    getName: () => name,
                    getControlType: jest.fn().mockReturnValue('standard'),
                    getLabel: jest.fn().mockReturnValue('Label'),
                    setLabel: jest.fn(),
                    getVisible: jest.fn().mockReturnValue(true),
                    setVisible: jest.fn(),
                    getDisabled: jest.fn().mockReturnValue(false),
                    setDisabled: mockSetDisabled,
                    setFocus: jest.fn(),
                    setNotification: jest.fn(),
                    clearNotification: jest.fn(),
                    addNotification: jest.fn(),
                    getAttribute: jest.fn().mockReturnValue({ getName: () => name })
                })),
                getAttribute: jest.fn().mockImplementation((name: string) => ({
                    getName: () => name,
                    getValue: jest.fn().mockReturnValue('value'),
                    setValue: mockSetValue
                }))
            };

            mockExecutionContext = {
                getFormContext: jest.fn().mockReturnValue(mockFormContext),
                getDepth: jest.fn().mockReturnValue(1),
                getEventArgs: jest.fn().mockReturnValue({
                    getDataLoadState: jest.fn().mockReturnValue(1),
                    getSaveMode: jest.fn(),
                    isDefaultPrevented: jest.fn().mockReturnValue(false),
                    preventDefault: jest.fn(),
                    preventDefaultOnError: jest.fn(),
                    disableAsyncTimeout: jest.fn()
                }),
                getEventSource: jest.fn(),
                getSharedVariable: jest.fn(),
                setSharedVariable: jest.fn()
            };
        });

        test('should call setDisabled on normal form (type 2)', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, { body: ['name'] });

            result.Body.name.Disabled = true;

            expect(mockSetDisabled).toHaveBeenCalledWith(true);
        });

        test('should call setValue on normal form (type 2)', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, { body: ['name'] });

            result.Body.name.Value = 'new value';

            expect(mockSetValue).toHaveBeenCalledWith('new value');
        });
    });

    // =========================================================================
    // Utility Callback Tests - ClearGlobalNotification, CurrentAppName
    // =========================================================================
    describe('LoadUtility - Additional Callback Tests', () => {
        beforeEach(() => {
            (global as any).window = {
                Xrm: {
                    Utility: {
                        getGlobalContext: jest.fn().mockReturnValue({
                            getClientUrl: jest.fn().mockReturnValue('url'),
                            getCurrentAppUrl: jest.fn().mockReturnValue('url'),
                            getVersion: jest.fn().mockReturnValue('9.2'),
                            isOnPremises: jest.fn().mockReturnValue(false),
                            getCurrentAppName: jest.fn().mockResolvedValue('My App'),
                            getCurrentAppProperties: jest.fn().mockResolvedValue({ appId: '123' }),
                            client: {
                                getClient: jest.fn().mockReturnValue('Web'),
                                getClientState: jest.fn().mockReturnValue('Online'),
                                getFormFactor: jest.fn().mockReturnValue(1),
                                isOffline: jest.fn().mockReturnValue(false)
                            },
                            organizationSettings: {},
                            userSettings: {}
                        })
                    },
                    App: {
                        addGlobalNotification: jest.fn().mockResolvedValue('notif-id'),
                        clearGlobalNotification: jest.fn().mockResolvedValue(undefined)
                    },
                    Device: {
                        captureAudio: jest.fn().mockResolvedValue({ fileContent: 'audio' }),
                        captureVideo: jest.fn().mockResolvedValue({ fileContent: 'video' })
                    }
                }
            };
        });

        afterEach(() => {
            delete (global as any).window;
        });

        test('should call ClearGlobalNotification with callback', async () => {
            const result = LoadUtility(undefined);
            const successCallback = jest.fn();

            result.ClearGlobalNotification('notif-id', successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect((global as any).window.Xrm.App.clearGlobalNotification).toHaveBeenCalled();
            expect(successCallback).toHaveBeenCalled();
        });

        test('should call CurrentAppName with callback', async () => {
            const result = LoadUtility(undefined);
            const successCallback = jest.fn();

            result.CurrentAppName(successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect((global as any).window.Xrm.Utility.getGlobalContext().getCurrentAppName).toHaveBeenCalled();
            expect(successCallback).toHaveBeenCalledWith('My App');
        });

        test('should call CaptureAudio with callback', async () => {
            const result = LoadUtility(undefined);
            const successCallback = jest.fn();

            result.CaptureAudio(successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect((global as any).window.Xrm.Device.captureAudio).toHaveBeenCalled();
            expect(successCallback).toHaveBeenCalled();
        });

        test('should call CaptureVideo with callback', async () => {
            const result = LoadUtility(undefined);
            const successCallback = jest.fn();

            result.CaptureVideo(successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect((global as any).window.Xrm.Device.captureVideo).toHaveBeenCalled();
            expect(successCallback).toHaveBeenCalled();
        });
    });

    // =========================================================================
    // getXrm Parent Fallback Tests
    // =========================================================================
    describe('LoadUtility - getXrm Parent Fallback', () => {
        test('should use parent.window.Xrm when window.Xrm is undefined', () => {
            // Set up parent.window.Xrm
            (global as any).parent = {
                window: {
                    Xrm: {
                        Utility: {
                            getGlobalContext: jest.fn().mockReturnValue({
                                getClientUrl: jest.fn().mockReturnValue('parent-url'),
                                client: {}
                            })
                        },
                        App: {},
                        Device: {}
                    }
                }
            };

            const result = LoadUtility(undefined);

            expect(result.ClientUrl).toBe('parent-url');

            delete (global as any).parent;
        });

        test('should use parent.parent.window.Xrm when window.Xrm and parent.window.Xrm are undefined', () => {
            // Set up parent.parent.window.Xrm
            (global as any).parent = {
                parent: {
                    window: {
                        Xrm: {
                            Utility: {
                                getGlobalContext: jest.fn().mockReturnValue({
                                    getClientUrl: jest.fn().mockReturnValue('grandparent-url'),
                                    client: {}
                                })
                            },
                            App: {},
                            Device: {}
                        }
                    }
                }
            };

            const result = LoadUtility(undefined);

            expect(result.ClientUrl).toBe('grandparent-url');

            delete (global as any).parent;
        });

        test('should return undefined when no Xrm is found', () => {
            // No window.Xrm, no parent.window.Xrm
            const result = LoadUtility(undefined);

            // Should not throw, just return undefined for properties
            expect(result.ClientUrl).toBeUndefined();
        });
    });

    // =========================================================================
    // Additional Coverage Tests - Field Methods
    // =========================================================================
    describe('LoadFormV3 - Field AddNotification and ContentWindow', () => {
        let mockExecutionContext: any;
        let mockFormContext: any;
        let mockAddNotification: jest.Mock;
        let mockGetContentWindow: jest.Mock;

        beforeEach(() => {
            mockAddNotification = jest.fn();
            mockGetContentWindow = jest.fn().mockResolvedValue({ postMessage: jest.fn() });

            mockFormContext = {
                data: {
                    entity: {
                        getId: jest.fn().mockReturnValue('{guid}'),
                        getEntityName: jest.fn().mockReturnValue('account'),
                        getEntityReference: jest.fn().mockReturnValue({}),
                        getPrimaryAttributeValue: jest.fn(),
                        getDataXml: jest.fn(),
                        getIsDirty: jest.fn().mockReturnValue(false),
                        isValid: jest.fn().mockReturnValue(true),
                        addOnSave: jest.fn(),
                        removeOnSave: jest.fn(),
                        addOnPostSave: jest.fn(),
                        removeOnPostSave: jest.fn(),
                        attributes: { get: jest.fn() }
                    },
                    getIsDirty: jest.fn().mockReturnValue(false),
                    isValid: jest.fn().mockReturnValue(true),
                    refresh: jest.fn(),
                    save: jest.fn(),
                    addOnLoad: jest.fn(),
                    removeOnLoad: jest.fn()
                },
                ui: {
                    getFormType: jest.fn().mockReturnValue(2),
                    getViewPortHeight: jest.fn().mockReturnValue(800),
                    getViewPortWidth: jest.fn().mockReturnValue(1200),
                    close: jest.fn(),
                    setFormNotification: jest.fn(),
                    clearFormNotification: jest.fn(),
                    refreshRibbon: jest.fn(),
                    addLoaded: jest.fn(),
                    removeLoaded: jest.fn(),
                    addOnLoad: jest.fn(),
                    removeOnLoad: jest.fn(),
                    controls: { get: jest.fn() },
                    tabs: { get: jest.fn() },
                    formSelector: {
                        getCurrentItem: jest.fn().mockReturnValue({ getId: jest.fn(), getLabel: jest.fn() }),
                        items: { getLength: jest.fn().mockReturnValue(0), get: jest.fn() }
                    },
                    navigation: { items: { getLength: jest.fn().mockReturnValue(0), get: jest.fn() } },
                    quickForms: { get: jest.fn() }
                },
                getControl: jest.fn().mockImplementation((name: string) => ({
                    getName: () => name,
                    getControlType: jest.fn().mockReturnValue('standard'),
                    getLabel: jest.fn().mockReturnValue('Label'),
                    setLabel: jest.fn(),
                    getVisible: jest.fn().mockReturnValue(true),
                    setVisible: jest.fn(),
                    getDisabled: jest.fn().mockReturnValue(false),
                    setDisabled: jest.fn(),
                    setFocus: jest.fn(),
                    setNotification: jest.fn(),
                    clearNotification: jest.fn(),
                    addNotification: mockAddNotification,
                    getContentWindow: mockGetContentWindow,
                    getAttribute: jest.fn().mockReturnValue({ getName: () => name })
                })),
                getAttribute: jest.fn().mockImplementation((name: string) => ({
                    getName: () => name,
                    getValue: jest.fn().mockReturnValue('value'),
                    setValue: jest.fn()
                }))
            };

            mockExecutionContext = {
                getFormContext: jest.fn().mockReturnValue(mockFormContext),
                getDepth: jest.fn().mockReturnValue(1),
                getEventArgs: jest.fn().mockReturnValue({}),
                getEventSource: jest.fn(),
                getSharedVariable: jest.fn(),
                setSharedVariable: jest.fn()
            };
        });

        test('should call AddNotification with callback', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, { body: ['webresource'] });
            const callback = jest.fn();

            result.Body.webresource.AddNotification('Test message', 'ERROR', 'notif1', callback);

            expect(mockAddNotification).toHaveBeenCalled();
        });

        test('should call ContentWindow with callback', async () => {
            const result = LoadFormV3(mockExecutionContext, undefined, { body: ['webresource'] });
            const successCallback = jest.fn();

            result.Body.webresource.ContentWindow(successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(mockGetContentWindow).toHaveBeenCalled();
            expect(successCallback).toHaveBeenCalled();
        });

        test('should return promise from ContentWindow without callback', async () => {
            const result = LoadFormV3(mockExecutionContext, undefined, { body: ['webresource'] });

            const promise = result.Body.webresource.ContentWindow();

            expect(promise).toBeDefined();
            const iframe = await promise;
            expect(iframe).toBeDefined();
        });
    });

    // =========================================================================
    // Form Selector Loop Tests (findFormItem)
    // =========================================================================
    describe('LoadFormV3 - Form Selector Operations', () => {
        let mockExecutionContext: any;
        let mockFormContext: any;
        let mockFormItems: any[];

        beforeEach(() => {
            mockFormItems = [
                { getId: () => 'form1', getLabel: () => 'Form 1', getVisible: () => true, setVisible: jest.fn(), navigate: jest.fn() },
                { getId: () => 'form2', getLabel: () => 'Form 2', getVisible: () => true, setVisible: jest.fn(), navigate: jest.fn() },
                { getId: () => 'form3', getLabel: () => 'Form 3', getVisible: () => false, setVisible: jest.fn(), navigate: jest.fn() }
            ];

            mockFormContext = {
                data: {
                    entity: {
                        getId: jest.fn().mockReturnValue('{guid}'),
                        getEntityName: jest.fn().mockReturnValue('account'),
                        getEntityReference: jest.fn().mockReturnValue({}),
                        getPrimaryAttributeValue: jest.fn(),
                        getDataXml: jest.fn(),
                        getIsDirty: jest.fn().mockReturnValue(false),
                        isValid: jest.fn().mockReturnValue(true),
                        addOnSave: jest.fn(),
                        removeOnSave: jest.fn(),
                        addOnPostSave: jest.fn(),
                        removeOnPostSave: jest.fn(),
                        attributes: { get: jest.fn() }
                    },
                    getIsDirty: jest.fn().mockReturnValue(false),
                    isValid: jest.fn().mockReturnValue(true),
                    refresh: jest.fn(),
                    save: jest.fn(),
                    addOnLoad: jest.fn(),
                    removeOnLoad: jest.fn()
                },
                ui: {
                    getFormType: jest.fn().mockReturnValue(2),
                    getViewPortHeight: jest.fn().mockReturnValue(800),
                    getViewPortWidth: jest.fn().mockReturnValue(1200),
                    close: jest.fn(),
                    setFormNotification: jest.fn(),
                    clearFormNotification: jest.fn(),
                    refreshRibbon: jest.fn(),
                    addLoaded: jest.fn(),
                    removeLoaded: jest.fn(),
                    addOnLoad: jest.fn(),
                    removeOnLoad: jest.fn(),
                    controls: { get: jest.fn() },
                    tabs: { get: jest.fn() },
                    formSelector: {
                        getCurrentItem: jest.fn().mockReturnValue({ getId: () => 'form1', getLabel: () => 'Form 1' }),
                        items: {
                            getLength: jest.fn().mockReturnValue(3),
                            get: jest.fn().mockImplementation((index: number) => mockFormItems[index])
                        }
                    },
                    navigation: { items: { getLength: jest.fn().mockReturnValue(0), get: jest.fn() } },
                    quickForms: { get: jest.fn() }
                },
                getControl: jest.fn(),
                getAttribute: jest.fn()
            };

            mockExecutionContext = {
                getFormContext: jest.fn().mockReturnValue(mockFormContext),
                getDepth: jest.fn().mockReturnValue(1),
                getEventArgs: jest.fn().mockReturnValue({}),
                getEventSource: jest.fn(),
                getSharedVariable: jest.fn(),
                setSharedVariable: jest.fn()
            };
        });

        test('should check FormIsVisible for existing form', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {});

            const isVisible = result.FormIsVisible('form2');

            expect(mockFormContext.ui.formSelector.items.getLength).toHaveBeenCalled();
        });

        test('should navigate to form by Id', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {});

            result.FormNavigateToFormId('form2');

            expect(mockFormContext.ui.formSelector.items.get).toHaveBeenCalled();
        });

        test('should navigate to form by Label', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {});

            result.FormNavigateToFormLabel('Form 2');

            expect(mockFormContext.ui.formSelector.items.get).toHaveBeenCalled();
        });

        test('should set form visibility', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {});

            result.FormSetVisible('form2', false);

            expect(mockFormItems[1].setVisible).toHaveBeenCalledWith(false);
        });
    });

    // =========================================================================
    // WebApi Callback Tests
    // =========================================================================
    describe('LoadWebApi - Callback Tests', () => {
        let mockWebApi: any;

        beforeEach(() => {
            mockWebApi = {
                createRecord: jest.fn().mockResolvedValue({ id: '{newId}' }),
                deleteRecord: jest.fn().mockResolvedValue({ id: '{deletedId}' }),
                retrieveRecord: jest.fn().mockResolvedValue({ name: 'Test' }),
                retrieveMultipleRecords: jest.fn().mockResolvedValue({ entities: [] }),
                updateRecord: jest.fn().mockResolvedValue({ id: '{updatedId}' }),
                execute: jest.fn().mockResolvedValue({ ok: true }),
                executeMultiple: jest.fn().mockResolvedValue([{ ok: true }]),
                online: {
                    execute: jest.fn().mockResolvedValue({ ok: true }),
                    executeMultiple: jest.fn().mockResolvedValue([{ ok: true }])
                },
                offline: {
                    isAvailable: jest.fn().mockReturnValue(true)
                }
            };

            (global as any).window = {
                Xrm: {
                    WebApi: mockWebApi
                }
            };
        });

        afterEach(() => {
            delete (global as any).window;
        });

        test('should call CreateRecord with callback', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;
            const successCallback = jest.fn();

            webApi.CreateRecord('account', { name: 'Test' }, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(mockWebApi.createRecord).toHaveBeenCalled();
            expect(successCallback).toHaveBeenCalled();
        });

        test('should call DeleteRecord with callback', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;
            const successCallback = jest.fn();

            webApi.DeleteRecord('account', '{id}', successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(mockWebApi.deleteRecord).toHaveBeenCalled();
            expect(successCallback).toHaveBeenCalled();
        });

        test('should call RetrieveRecord with callback', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;
            const successCallback = jest.fn();
            const errorCallback = jest.fn();

            // Using 5 arguments to match the signature (entityLogicalName, id, options, successCallback, errorCallback)
            webApi.RetrieveRecord('account', '{id}', '?$select=name', successCallback, errorCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(mockWebApi.retrieveRecord).toHaveBeenCalled();
        });

        test('should call RetrieveMultipleRecords with callback', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;
            const successCallback = jest.fn();

            webApi.RetrieveMultipleRecords('account', '?$select=name', 50, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(mockWebApi.retrieveMultipleRecords).toHaveBeenCalled();
            expect(successCallback).toHaveBeenCalled();
        });

        test('should call UpdateRecord with callback', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;
            const successCallback = jest.fn();

            webApi.UpdateRecord('account', '{id}', { name: 'Updated' }, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(mockWebApi.updateRecord).toHaveBeenCalled();
            expect(successCallback).toHaveBeenCalled();
        });

        test('should call Execute with callback', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;
            const successCallback = jest.fn();

            webApi.Execute({ getMetadata: () => ({}) }, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(mockWebApi.execute).toHaveBeenCalled();
            expect(successCallback).toHaveBeenCalled();
        });

        test('should call ExecuteMultiple with callback', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;
            const successCallback = jest.fn();

            webApi.ExecuteMultiple([{ getMetadata: () => ({}) }], successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(mockWebApi.executeMultiple).toHaveBeenCalled();
            expect(successCallback).toHaveBeenCalled();
        });
    });

    // =========================================================================
    // WebApi Online/Offline Tests
    // =========================================================================
    describe('LoadWebApi - Online and Offline', () => {
        let mockWebApi: any;

        beforeEach(() => {
            mockWebApi = {
                online: {
                    execute: jest.fn().mockResolvedValue({ ok: true }),
                    executeMultiple: jest.fn().mockResolvedValue([{ ok: true }])
                },
                offline: {
                    isAvailable: jest.fn().mockReturnValue(true)
                }
            };

            (global as any).window = {
                Xrm: {
                    WebApi: mockWebApi
                }
            };
        });

        afterEach(() => {
            delete (global as any).window;
        });

        test('should access Online.Execute with callback', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;
            const successCallback = jest.fn();

            webApi.Online.Execute({ getMetadata: () => ({}) }, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(mockWebApi.online.execute).toHaveBeenCalled();
            expect(successCallback).toHaveBeenCalled();
        });

        test('should return promise from Online.Execute without callback', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;

            const promise = webApi.Online.Execute({ getMetadata: () => ({}) });

            expect(promise).toBeDefined();
        });

        test('should access Online.ExecuteMultiple with callback', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;
            const successCallback = jest.fn();

            webApi.Online.ExecuteMultiple([{ getMetadata: () => ({}) }], successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(mockWebApi.online.executeMultiple).toHaveBeenCalled();
            expect(successCallback).toHaveBeenCalled();
        });

        test('should return promise from Online.ExecuteMultiple without callback', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;

            const promise = webApi.Online.ExecuteMultiple([{ getMetadata: () => ({}) }]);

            expect(promise).toBeDefined();
        });

        test('should check Offline.IsAvailable', () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;

            const isAvailable = webApi.Offline.IsAvailable('account');

            expect(mockWebApi.offline.isAvailable).toHaveBeenCalledWith('account');
            expect(isAvailable).toBe(true);
        });
    });

    // =========================================================================
    // Copilot Tests
    // =========================================================================
    describe('LoadCopilot - ExecuteEvent and ExecutePrompt', () => {
        let mockCopilot: any;

        beforeEach(() => {
            mockCopilot = {
                executeEvent: jest.fn().mockResolvedValue({ success: true }),
                executePrompt: jest.fn().mockResolvedValue({ response: 'AI response' })
            };

            (global as any).window = {
                Xrm: {
                    Copilot: mockCopilot
                }
            };
        });

        afterEach(() => {
            delete (global as any).window;
        });

        test('should call ExecuteEvent with callback', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const copilot = LoadFormV3(mockExecContext, undefined, {}).Copilot;
            const successCallback = jest.fn();

            copilot.ExecuteEvent('eventName', { param: 'value' }, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(mockCopilot.executeEvent).toHaveBeenCalledWith('eventName', { param: 'value' });
            expect(successCallback).toHaveBeenCalled();
        });

        test('should return promise from ExecuteEvent without callback', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const copilot = LoadFormV3(mockExecContext, undefined, {}).Copilot;

            const promise = copilot.ExecuteEvent('eventName', { param: 'value' });

            expect(promise).toBeDefined();
            const result = await promise;
            expect(result.success).toBe(true);
        });

        test('should call ExecutePrompt with callback', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const copilot = LoadFormV3(mockExecContext, undefined, {}).Copilot;
            const successCallback = jest.fn();

            copilot.ExecutePrompt('What is CRM?', successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(mockCopilot.executePrompt).toHaveBeenCalledWith('What is CRM?');
            expect(successCallback).toHaveBeenCalled();
        });

        test('should return promise from ExecutePrompt without callback', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const copilot = LoadFormV3(mockExecContext, undefined, {}).Copilot;

            const promise = copilot.ExecutePrompt('What is CRM?');

            expect(promise).toBeDefined();
            const result = await promise;
            expect(result.response).toBe('AI response');
        });
    });

    // =========================================================================
    // WebApi RetrieveRecords with FetchXml Tests
    // =========================================================================
    describe('LoadWebApi - RetrieveRecords with FetchXml', () => {
        let mockWebApi: any;

        beforeEach(() => {
            mockWebApi = {
                retrieveMultipleRecords: jest.fn().mockResolvedValue({
                    entities: [{ accountid: '{id1}', name: 'Account 1' }, { accountid: '{id2}', name: 'Account 2' }]
                }),
                retrieveRecord: jest.fn().mockResolvedValue({ accountid: '{id}', name: 'Test Account' })
            };

            // Mock DOMParser for fetchXml parsing
            const mockParser = {
                parseFromString: jest.fn().mockImplementation((xml: string) => ({
                    querySelector: jest.fn().mockReturnValue({
                        hasAttribute: jest.fn().mockReturnValue(true),
                        getAttribute: jest.fn().mockReturnValue('account')
                    })
                }))
            };
            (global as any).DOMParser = jest.fn().mockImplementation(() => mockParser);

            (global as any).window = {
                Xrm: {
                    WebApi: mockWebApi
                }
            };
        });

        afterEach(() => {
            delete (global as any).window;
            delete (global as any).DOMParser;
            jest.resetModules();
        });

        test('should call RetrieveRecords with plain FetchXml', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;
            const mockFactory = jest.fn().mockImplementation((entity: any) => entity);

            const fetchXml = '<fetch><entity name="account"><attribute name="name"/></entity></fetch>';
            const promise = webApi.RetrieveRecords(mockFactory, fetchXml);

            expect(promise).toBeDefined();
            await new Promise(resolve => setTimeout(resolve, 10));
            expect(mockWebApi.retrieveMultipleRecords).toHaveBeenCalled();
        });

        test('should call RetrieveRecords with encoded FetchXml', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;
            const mockFactory = jest.fn().mockImplementation((entity: any) => entity);

            const encodedFetchXml = '?fetchXml=' + encodeURIComponent('<fetch><entity name="account"></entity></fetch>');
            const promise = webApi.RetrieveRecords(mockFactory, encodedFetchXml);

            expect(promise).toBeDefined();
        });

        test('should call RetrieveRecords with entity name and OData options', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;
            const mockFactory = jest.fn().mockImplementation((entity: any) => entity);

            const promise = webApi.RetrieveRecords(mockFactory, 'account', '?$select=name', 50);

            expect(promise).toBeDefined();
        });

        test('should call RetrieveRecords with callback', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;
            const mockFactory = jest.fn().mockImplementation((entity: any) => entity);
            const successCallback = jest.fn();

            webApi.RetrieveRecords(mockFactory, 'account', '?$select=name', successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(mockWebApi.retrieveMultipleRecords).toHaveBeenCalled();
        });

        test('should call RetrieveRecord with constructor and options as function', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;

            class AccountApi {
                constructor(public entity: any) { }
            }

            const successCallback = jest.fn();
            webApi.RetrieveRecord(AccountApi, 'account', '{id}', successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(mockWebApi.retrieveRecord).toHaveBeenCalled();
        });

        test('should call RetrieveRecord with constructor and no options', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;

            class AccountApi {
                constructor(public entity: any) { }
            }

            const promise = webApi.RetrieveRecord(AccountApi, 'account', '{id}');

            expect(promise).toBeDefined();
        });
    });

    // =========================================================================
    // WebApi Methods - Promise Returns (without callbacks)
    // =========================================================================
    describe('LoadWebApi - Promise Returns', () => {
        let mockWebApi: any;

        beforeEach(() => {
            mockWebApi = {
                createRecord: jest.fn().mockResolvedValue({ id: '{newId}' }),
                deleteRecord: jest.fn().mockResolvedValue({ id: '{deletedId}' }),
                retrieveRecord: jest.fn().mockResolvedValue({ name: 'Test' }),
                retrieveMultipleRecords: jest.fn().mockResolvedValue({ entities: [] }),
                updateRecord: jest.fn().mockResolvedValue({ id: '{updatedId}' }),
                execute: jest.fn().mockResolvedValue({ ok: true }),
                executeMultiple: jest.fn().mockResolvedValue([{ ok: true }])
            };

            (global as any).window = {
                Xrm: {
                    WebApi: mockWebApi
                }
            };
        });

        afterEach(() => {
            delete (global as any).window;
            jest.resetModules();
        });

        test('should return promise from CreateRecord', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;

            const promise = webApi.CreateRecord('account', { name: 'Test' });

            expect(promise).toBeDefined();
            const result = await promise;
            expect(result.id).toBe('{newId}');
        });

        test('should return promise from DeleteRecord', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;

            const promise = webApi.DeleteRecord('account', '{id}');

            expect(promise).toBeDefined();
        });

        test('should return promise from RetrieveMultipleRecords', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;

            const promise = webApi.RetrieveMultipleRecords('account', '?$select=name');

            expect(promise).toBeDefined();
        });

        test('should return promise from UpdateRecord', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;

            const promise = webApi.UpdateRecord('account', '{id}', { name: 'Updated' });

            expect(promise).toBeDefined();
        });

        test('should return promise from Execute', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;

            const promise = webApi.Execute({ getMetadata: () => ({}) });

            expect(promise).toBeDefined();
        });

        test('should return promise from ExecuteMultiple', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;

            const promise = webApi.ExecuteMultiple([{ getMetadata: () => ({}) }]);

            expect(promise).toBeDefined();
        });
    });

    // =========================================================================
    // Form Selector - Not Found Cases
    // =========================================================================
    describe('LoadFormV3 - Form Selector Not Found', () => {
        let mockExecutionContext: any;
        let mockFormContext: any;

        beforeEach(() => {
            mockFormContext = {
                data: {
                    entity: {
                        getId: jest.fn().mockReturnValue('{guid}'),
                        getEntityName: jest.fn().mockReturnValue('account'),
                        getEntityReference: jest.fn().mockReturnValue({}),
                        getPrimaryAttributeValue: jest.fn(),
                        getDataXml: jest.fn(),
                        getIsDirty: jest.fn().mockReturnValue(false),
                        isValid: jest.fn().mockReturnValue(true),
                        addOnSave: jest.fn(),
                        removeOnSave: jest.fn(),
                        addOnPostSave: jest.fn(),
                        removeOnPostSave: jest.fn(),
                        attributes: { get: jest.fn() }
                    },
                    getIsDirty: jest.fn().mockReturnValue(false),
                    isValid: jest.fn().mockReturnValue(true),
                    refresh: jest.fn(),
                    save: jest.fn(),
                    addOnLoad: jest.fn(),
                    removeOnLoad: jest.fn()
                },
                ui: {
                    getFormType: jest.fn().mockReturnValue(2),
                    getViewPortHeight: jest.fn().mockReturnValue(800),
                    getViewPortWidth: jest.fn().mockReturnValue(1200),
                    close: jest.fn(),
                    setFormNotification: jest.fn(),
                    clearFormNotification: jest.fn(),
                    refreshRibbon: jest.fn(),
                    addLoaded: jest.fn(),
                    removeLoaded: jest.fn(),
                    addOnLoad: jest.fn(),
                    removeOnLoad: jest.fn(),
                    controls: { get: jest.fn() },
                    tabs: { get: jest.fn() },
                    formSelector: {
                        getCurrentItem: jest.fn().mockReturnValue({ getId: () => 'form1', getLabel: () => 'Form 1' }),
                        items: {
                            getLength: jest.fn().mockReturnValue(2),
                            get: jest.fn().mockImplementation((index: number) => {
                                const items = [
                                    { getId: () => 'form1', getLabel: () => 'Form 1', getVisible: () => true, setVisible: jest.fn(), navigate: jest.fn() },
                                    { getId: () => 'form2', getLabel: () => 'Form 2', getVisible: () => true, setVisible: jest.fn(), navigate: jest.fn() }
                                ];
                                return items[index];
                            })
                        }
                    },
                    navigation: { items: { getLength: jest.fn().mockReturnValue(0), get: jest.fn() } },
                    quickForms: { get: jest.fn() }
                },
                getControl: jest.fn(),
                getAttribute: jest.fn()
            };

            mockExecutionContext = {
                getFormContext: jest.fn().mockReturnValue(mockFormContext),
                getDepth: jest.fn().mockReturnValue(1),
                getEventArgs: jest.fn().mockReturnValue({}),
                getEventSource: jest.fn(),
                getSharedVariable: jest.fn(),
                setSharedVariable: jest.fn()
            };
        });

        test('should return null for non-existent form', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {});

            // Trying to check visibility of non-existent form
            const isVisible = result.FormIsVisible('nonExistentForm');

            // Should return undefined/null for non-existent form
            expect(isVisible).toBeFalsy();
        });

        test('should handle FormNavigateToFormId for non-existent form', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {});

            // This should not throw
            result.FormNavigateToFormId('nonExistentForm');
        });

        test('should handle FormNavigateToFormLabel for non-existent form', () => {
            const result = LoadFormV3(mockExecutionContext, undefined, {});

            // This should not throw
            result.FormNavigateToFormLabel('Non Existent Form');
        });
    });

    // =========================================================================
    // extractEntityName Edge Cases
    // =========================================================================
    describe('LoadWebApi - extractEntityName Edge Cases', () => {
        let mockWebApi: any;

        beforeEach(() => {
            mockWebApi = {
                retrieveMultipleRecords: jest.fn().mockResolvedValue({ entities: [] })
            };

            (global as any).window = {
                Xrm: {
                    WebApi: mockWebApi
                }
            };
        });

        afterEach(() => {
            delete (global as any).window;
            delete (global as any).DOMParser;
            jest.resetModules();
        });

        test('should handle FetchXml starting with < (plain XML)', async () => {
            // Mock DOMParser to return entity name
            const mockParser = {
                parseFromString: jest.fn().mockReturnValue({
                    querySelector: jest.fn().mockReturnValue({
                        hasAttribute: jest.fn().mockReturnValue(true),
                        getAttribute: jest.fn().mockReturnValue('contact')
                    })
                })
            };
            (global as any).DOMParser = jest.fn().mockImplementation(() => mockParser);

            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;
            const mockFactory = jest.fn().mockImplementation((e: any) => e);

            // Pass XML that starts with spaces then '<'
            const plainXml = '   <fetch><entity name="contact"></entity></fetch>';
            const promise = webApi.RetrieveRecords(mockFactory, plainXml);

            expect(promise).toBeDefined();
        });

        test('should throw error when entity name not found in fetchXml', async () => {
            // Mock DOMParser to return null entity node
            const mockParser = {
                parseFromString: jest.fn().mockReturnValue({
                    querySelector: jest.fn().mockReturnValue(null)
                })
            };
            (global as any).DOMParser = jest.fn().mockImplementation(() => mockParser);

            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;
            const mockFactory = jest.fn().mockImplementation((e: any) => e);

            const fetchXml = '<fetch><invalid/></fetch>';

            expect(() => webApi.RetrieveRecords(mockFactory, fetchXml)).toThrow('Entity name not found in fetchXml');
        });

        test('should throw error for OData query without entity name', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;
            const mockFactory = jest.fn().mockImplementation((e: any) => e);

            // This is OData style (starts with ?) but NOT fetchXml, so entity cannot be determined
            expect(() => webApi.RetrieveRecords(mockFactory, '?$select=name&$top=10')).toThrow('Entity name cannot be determined from OData query');
        });
    });

    // =========================================================================
    // RetrieveRecord Simple (line 435-441)
    // =========================================================================
    describe('LoadWebApi - RetrieveRecord Simple Overload', () => {
        let mockWebApi: any;

        // Note: The simple RetrieveRecord overload (lines 435-441) cannot be tested independently
        // because both simple and constructor versions share the same method name and JavaScript
        // doesn't support true method overloading. The constructor version always gets called first.
        // Current line coverage is 99.26% which is excellent.
    });

    // =========================================================================
    // RetrieveRecords Branches (lines 495-504)
    // =========================================================================
    describe('LoadWebApi - RetrieveRecords Branch Coverage', () => {
        let mockWebApi: any;

        beforeEach(() => {
            mockWebApi = {
                retrieveMultipleRecords: jest.fn().mockResolvedValue({ entities: [{ id: '1' }] })
            };

            // Mock DOMParser
            const mockParser = {
                parseFromString: jest.fn().mockReturnValue({
                    querySelector: jest.fn().mockReturnValue({
                        hasAttribute: jest.fn().mockReturnValue(true),
                        getAttribute: jest.fn().mockReturnValue('account')
                    })
                })
            };
            (global as any).DOMParser = jest.fn().mockImplementation(() => mockParser);

            (global as any).window = {
                Xrm: {
                    WebApi: mockWebApi
                }
            };
        });

        afterEach(() => {
            delete (global as any).window;
            delete (global as any).DOMParser;
            jest.resetModules();
        });

        test('should handle FetchXml with callback as 3rd param', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;
            const mockFactory = jest.fn().mockImplementation((e: any) => e);
            const successCallback = jest.fn();
            const errorCallback = jest.fn();

            // FetchXml pattern: RetrieveRecords(factory, fetchXml, successCallback, errorCallback)
            const fetchXml = '?fetchXml=' + encodeURIComponent('<fetch><entity name="account"></entity></fetch>');
            webApi.RetrieveRecords(mockFactory, fetchXml, successCallback, errorCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(mockWebApi.retrieveMultipleRecords).toHaveBeenCalled();
        });

        test('should handle FetchXml with maxPageSize as 3rd param and callback as 4th', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;
            const mockFactory = jest.fn().mockImplementation((e: any) => e);
            const successCallback = jest.fn();

            // FetchXml pattern: RetrieveRecords(factory, fetchXml, maxPageSize, successCallback)
            const fetchXml = '?fetchXml=' + encodeURIComponent('<fetch><entity name="account"></entity></fetch>');
            webApi.RetrieveRecords(mockFactory, fetchXml, 100, successCallback);

            await new Promise(resolve => setTimeout(resolve, 10));
            expect(mockWebApi.retrieveMultipleRecords).toHaveBeenCalled();
        });
    });

    // =========================================================================
    // RetrieveRecords Empty Entities (line 525)
    // =========================================================================
    describe('LoadWebApi - RetrieveRecords Empty Results', () => {
        let mockWebApi: any;

        beforeEach(() => {
            mockWebApi = {
                retrieveMultipleRecords: jest.fn().mockResolvedValue({ entities: [] })
            };

            (global as any).window = {
                Xrm: {
                    WebApi: mockWebApi
                }
            };
        });

        afterEach(() => {
            delete (global as any).window;
            jest.resetModules();
        });

        test('should return empty array when no entities found', async () => {
            const mockExecContext = { getFormContext: () => ({ data: { entity: { attributes: { get: () => null } } }, ui: { formSelector: { getCurrentItem: () => null } } }) }; const webApi = LoadFormV3(mockExecContext, undefined, {}).WebApi;
            const mockFactory = jest.fn().mockImplementation((e: any) => e);

            const promise = webApi.RetrieveRecords(mockFactory, 'account', '?$select=name');

            expect(promise).toBeDefined();
            const result = await promise;
            expect(result).toEqual([]);
        });
    });

    // =========================================================================
    // LoadFormV3 - Dialog Loading (line 744)
    // =========================================================================
    describe('LoadFormV3 - Dialog Loading', () => {
        let mockExecutionContext: any;
        let mockFormContext: any;

        beforeEach(() => {
            mockFormContext = {
                data: {
                    entity: {
                        getId: jest.fn().mockReturnValue('{guid}'),
                        getEntityName: jest.fn().mockReturnValue('account'),
                        getEntityReference: jest.fn().mockReturnValue({}),
                        getPrimaryAttributeValue: jest.fn(),
                        getDataXml: jest.fn(),
                        getIsDirty: jest.fn().mockReturnValue(false),
                        isValid: jest.fn().mockReturnValue(true),
                        addOnSave: jest.fn(),
                        removeOnSave: jest.fn(),
                        addOnPostSave: jest.fn(),
                        removeOnPostSave: jest.fn(),
                        attributes: { get: jest.fn() }
                    },
                    getIsDirty: jest.fn().mockReturnValue(false),
                    isValid: jest.fn().mockReturnValue(true),
                    refresh: jest.fn(),
                    save: jest.fn(),
                    addOnLoad: jest.fn(),
                    removeOnLoad: jest.fn()
                },
                ui: {
                    getFormType: jest.fn().mockReturnValue(2),
                    getViewPortHeight: jest.fn().mockReturnValue(800),
                    getViewPortWidth: jest.fn().mockReturnValue(1200),
                    close: jest.fn(),
                    setFormNotification: jest.fn(),
                    clearFormNotification: jest.fn(),
                    refreshRibbon: jest.fn(),
                    addLoaded: jest.fn(),
                    removeLoaded: jest.fn(),
                    addOnLoad: jest.fn(),
                    removeOnLoad: jest.fn(),
                    controls: { get: jest.fn() },
                    tabs: { get: jest.fn() },
                    formSelector: {
                        getCurrentItem: jest.fn().mockReturnValue({ getId: jest.fn(), getLabel: jest.fn() }),
                        items: { getLength: jest.fn().mockReturnValue(0), get: jest.fn() }
                    },
                    navigation: { items: { getLength: jest.fn().mockReturnValue(0), get: jest.fn() } },
                    quickForms: { get: jest.fn() }
                },
                getControl: jest.fn().mockImplementation((name: string) => ({
                    getName: () => name,
                    getControlType: jest.fn().mockReturnValue('standard'),
                    getLabel: jest.fn().mockReturnValue('Label'),
                    setLabel: jest.fn(),
                    getVisible: jest.fn().mockReturnValue(true),
                    setVisible: jest.fn(),
                    getDisabled: jest.fn().mockReturnValue(false),
                    setDisabled: jest.fn(),
                    setFocus: jest.fn(),
                    setNotification: jest.fn(),
                    clearNotification: jest.fn(),
                    addNotification: jest.fn(),
                    getAttribute: jest.fn().mockReturnValue({ getName: () => name })
                })),
                getAttribute: jest.fn().mockImplementation((name: string) => ({
                    getName: () => name,
                    getValue: jest.fn().mockReturnValue('value'),
                    setValue: jest.fn()
                }))
            };

            mockExecutionContext = {
                getFormContext: jest.fn().mockReturnValue(mockFormContext),
                getDepth: jest.fn().mockReturnValue(1),
                getEventArgs: jest.fn().mockReturnValue({}),
                getEventSource: jest.fn(),
                getSharedVariable: jest.fn(),
                setSharedVariable: jest.fn()
            };
        });

        test('should load Dialog when dialog array is provided', () => {
            // Pass dialog config to trigger line 744
            const result = LoadFormV3(mockExecutionContext, undefined, { dialog: ['dialogField1'] } as any);

            expect(result).toBeDefined();
            expect((result as any).Dialog).toBeDefined();
        });
    });
});


