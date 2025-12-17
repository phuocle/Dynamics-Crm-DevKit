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

    // =========================================================================
    // LoadFormV2 Extended Tests - Field Properties & Methods
    // =========================================================================
    describe('LoadFormV2 Extended - Field Operations', () => {
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
            const result = LoadFormV2(mockExecutionContext, undefined, {
                body: ['name']
            });

            expect(result.Body.name).toBeDefined();
            expect(result.Body.name.AttributeName).toBe('name');
            expect(result.Body.name.ControlType).toBe('standard');
            expect(result.Body.name.Label).toBe('Field Label');
        });

        test('should access field Value getter/setter', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, { body: ['name'] });

            // Access Value (getter)
            expect(result.Body.name.Value).toBe('test value');
        });

        test('should load tabs with sections', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, {
                tab: ['general___section1', 'general___section2', 'details']
            });

            expect(result.Tab.general).toBeDefined();
            expect(result.Tab.general.Section.section1).toBeDefined();
            expect(result.Tab.general.Section.section2).toBeDefined();
            expect(result.Tab.details).toBeDefined();
        });

        test('should access tab properties and methods', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, {
                tab: ['general']
            });

            expect(result.Tab.general.Name).toBe('general');
            expect(result.Tab.general.Label).toBe('Tab Label');
            expect(result.Tab.general.Visible).toBe(true);
            expect(result.Tab.general.DisplayState).toBe('expanded');
            expect(typeof result.Tab.general.AddTabStateChange).toBe('function');
            expect(typeof result.Tab.general.RemoveTabStateChange).toBe('function');
            expect(typeof result.Tab.general.Focus).toBe('function');
        });

        test('should load grids with properties', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, {
                grid: ['Contacts']
            });

            expect(result.Grid.Contacts).toBeDefined();
            expect(result.Grid.Contacts.EntityName).toBe('contact');
            expect(result.Grid.Contacts.FetchXml).toBe('<fetch/>');
            expect(result.Grid.Contacts.GridType).toBe(2);
            expect(result.Grid.Contacts.TotalRecordCount).toBe(5);
        });

        test('should access grid rows collection', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, {
                grid: ['Contacts']
            });

            const rows = result.Grid.Contacts.Rows;
            expect(rows.getLength()).toBe(2);

            const row0 = rows.get(0);
            expect(row0.EntityId).toBe('{row-0}');
            expect(row0.EntityName).toBe('contact');
        });

        test('should iterate grid rows with forEach', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, {
                grid: ['Contacts']
            });

            const rowIds: string[] = [];
            result.Grid.Contacts.Rows.forEach((row: any, index: number) => {
                rowIds.push(row.EntityId);
            });

            expect(rowIds.length).toBe(2);
        });

        test('should access grid columns in rows', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, {
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
            const result = LoadFormV2(mockExecutionContext, undefined, {
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
            const result = LoadFormV2(mockExecutionContext, undefined, {
                grid: ['Contacts']
            });

            const viewSelector = result.Grid.Contacts.ViewSelector;
            expect(viewSelector.Visible).toBe(true);
            expect(viewSelector.CurrentView.name).toBe('Active Contacts');
        });

        test('should have grid methods', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, {
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
            const result = LoadFormV2(mockExecutionContext, undefined, {
                navigation: ['nav_contacts']
            });

            expect(result.Navigation.nav_contacts).toBeDefined();
            expect(result.Navigation.nav_contacts.Id).toBe('nav_contacts');
        });

        test('should load header fields', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, {
                header: ['ownerid']
            });

            expect(result.Header.ownerid).toBeDefined();
        });

        test('should load quick forms', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, {
                quick: ['contactquickform___emailaddress1']
            });

            expect(result.QuickForm.contactquickform).toBeDefined();
            expect(result.QuickForm.contactquickform.IsLoaded()).toBe(true);
        });

        test('should call field methods', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, { body: ['name'] });

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
            const result = LoadFormV2(mockExecutionContext, undefined, {});

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
    describe('LoadFormV2 - ReadOnly Form Tests', () => {
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
            const result = LoadFormV2(mockExecutionContext, undefined, { body: ['name'] });

            // In ReadOnly form (type 3), setDisabled should not be called
            result.Body.name.Disabled = true;

            // The setter should have returned early
            expect(result.Body.name).toBeDefined();
        });

        test('should handle ReadOnly form type for Value setter', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, { body: ['name'] });

            // In ReadOnly form (type 3), setValue should not be called
            result.Body.name.Value = 'new value';

            expect(result.Body.name).toBeDefined();
        });

        test('should call form methods Save and Refresh', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, {});

            result.Save({ saveMode: 1 });
            result.Refresh(true);

            expect(mockFormContext.data.save).toHaveBeenCalled();
            expect(mockFormContext.data.refresh).toHaveBeenCalled();
        });

        test('should call UI methods', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, {});

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
    describe('LoadFormV2 - Grid SelectedRows', () => {
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
            const result = LoadFormV2(mockExecutionContext, undefined, {
                grid: ['Contacts']
            });

            const selectedRows = result.Grid.Contacts.SelectedRows;
            expect(selectedRows.getLength()).toBe(2);
        });

        test('should iterate SelectedRows with forEach', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, {
                grid: ['Contacts']
            });

            const selectedIds: string[] = [];
            result.Grid.Contacts.SelectedRows.forEach((row: any) => {
                selectedIds.push('selected');
            });

            expect(selectedIds.length).toBe(2);
        });

        test('should call grid Url method', () => {
            const result = LoadFormV2(mockExecutionContext, undefined, {
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
});
