/**
 * Account.form.ts Unit Tests
 * Test từng control type riêng biệt để dễ dàng comment out và test từng phần
 * Covers ALL 12 DevKit control types
 */

// Import AccountForm namespace - OptionSet is now global (populated by devkit.ts and Account.form.ts)
import { AccountForm } from '../entities/generator/Account.form';
import { OptionSet } from '../entities/generator/OptionSet';

// ============================================================================
// Mock Setup - Matches devkit.ts LoadFormV2 behavior
// ============================================================================
function createMockFormContext(formType: number = 2) {
    // Mocks that we can spy on
    const mockSetValue = jest.fn();
    const mockSetDisabled = jest.fn();
    const mockSetVisible = jest.fn();
    const mockSetLabel = jest.fn();
    const mockSetRequiredLevel = jest.fn();
    const mockSetSubmitMode = jest.fn();
    const mockAddOnChange = jest.fn();
    const mockFireOnChange = jest.fn();
    const mockSetFocus = jest.fn();
    const mockSetPrecision = jest.fn();
    const mockSetShowTime = jest.fn();

    const createAttribute = (name: string, type: string, value: any, options?: any) => ({
        getName: () => name,
        getAttributeType: () => type,
        getValue: () => value,
        setValue: mockSetValue,
        getIsDirty: () => false,
        isValid: () => true,
        getFormat: () => type === 'datetime' ? 'datetime' : (type === 'date' ? 'date' : null),
        getMaxLength: () => 100,
        getMax: () => 1000000,
        getMin: () => 0,
        getPrecision: () => 2,
        setPrecision: mockSetPrecision,
        getOptions: () => options || [{ value: 1, text: 'Option 1' }],
        getSelectedOption: () => type === 'multioptionset' ? options : (options?.[0] || { value: 1, text: 'Option 1' }),
        getText: () => type === 'multioptionset' ? ['Option A', 'Option B'] : 'Option 1',
        getInitialValue: () => type === 'multioptionset' ? [100000000] : (type === 'boolean' ? false : 1),
        getRequiredLevel: () => 'none',
        setRequiredLevel: mockSetRequiredLevel,
        getSubmitMode: () => 'dirty',
        setSubmitMode: mockSetSubmitMode,
        addOnChange: mockAddOnChange,
        removeOnChange: jest.fn(),
        fireOnChange: mockFireOnChange
    });

    const createControl = (name: string, attr: any, controlType?: string) => ({
        getName: () => name,
        getControlType: () => controlType || 'standard',
        getLabel: () => 'Test Label',
        setLabel: mockSetLabel,
        getVisible: () => true,
        setVisible: mockSetVisible,
        getDisabled: () => false,
        setDisabled: mockSetDisabled,
        setFocus: mockSetFocus,
        setNotification: jest.fn().mockReturnValue(true),
        clearNotification: jest.fn().mockReturnValue(true),
        addNotification: jest.fn(),
        addOnOutputChange: jest.fn(),
        removeOnOutputChange: jest.fn(),
        getAttribute: () => attr,
        getShowTime: () => true,
        setShowTime: mockSetShowTime
    });

    const mockLookupValue = [{ id: '{guid}', name: 'Test', entityType: 'contact' }];
    const mockDate = new Date('2024-01-15');
    const mockDateTime = new Date('2024-01-15T10:30:00');

    // Attributes keyed by lowercase name (as devkit.ts uses)
    const attributes: Record<string, any> = {
        // Standard controls
        'name': createAttribute('name', 'string', 'Test Account'),
        'description': createAttribute('description', 'memo', 'Test Description'),
        'numberofemployees': createAttribute('numberofemployees', 'integer', 100),
        'revenue': createAttribute('revenue', 'money', 1000000),
        'creditonhold': createAttribute('creditonhold', 'boolean', false),
        'industrycode': createAttribute('industrycode', 'optionset', 7, [
            { value: 1, text: 'Accounting' },
            { value: 7, text: 'Consulting' },
            { value: 16, text: 'Financial' }
        ]),
        'primarycontactid': createAttribute('primarycontactid', 'lookup', mockLookupValue),
        'ownerid': createAttribute('ownerid', 'lookup', mockLookupValue),
        // Custom v4_ controls for missing types
        'v4_birthday': createAttribute('v4_birthday', 'date', mockDate),
        'v4_appointmenttime': createAttribute('v4_appointmenttime', 'datetime', mockDateTime),
        'v4_latitude': createAttribute('v4_latitude', 'decimal', 40.7128),
        'v4_discountpercentage': createAttribute('v4_discountpercentage', 'double', 15.5),
        'v4_categories': createAttribute('v4_categories', 'multioptionset', [100000000, 100000001], [
            { value: 100000000, text: 'Category A' },
            { value: 100000001, text: 'Category B' },
            { value: 100000002, text: 'Category C' }
        ]),
        // Specialty controls don't have attributes - they are control-only
        'v4_webresourcehelp': null,
        'v4_iframeexternal': null,
        'v4_timersla': null,
        'v4_knowledgesearch': null
    };

    // Specialty control mocks
    const mockWebResourceSetSrc = jest.fn();
    const mockWebResourceSetData = jest.fn();
    const mockWebResourceContentWindow = jest.fn((successCallback: any) => {
        if (successCallback) successCallback({ postMessage: jest.fn() });
    });

    const mockIFrameSetSrc = jest.fn();
    const mockIFrameContentWindow = jest.fn((successCallback: any) => {
        if (successCallback) successCallback({ location: { href: 'https://test.com' } });
    });

    const mockTimerRefresh = jest.fn();

    const mockKnowledgeSetSearchQuery = jest.fn();
    const mockKnowledgeAddPostSearch = jest.fn();
    const mockKnowledgeAddResultOpened = jest.fn();
    const mockKnowledgeAddSelection = jest.fn();
    const mockKnowledgeOpenSearchResult = jest.fn().mockReturnValue(true);
    const mockKnowledgeRemovePostSearch = jest.fn();
    const mockKnowledgeRemoveResultOpened = jest.fn();
    const mockKnowledgeRemoveSelection = jest.fn();

    // Specialty controls
    const specialtyControls: Record<string, any> = {
        'v4_webresourcehelp': {
            getName: () => 'v4_webresourcehelp',
            getControlType: () => 'webresource',
            getLabel: () => 'Help Web Resource',
            setLabel: mockSetLabel,
            getVisible: () => true,
            setVisible: mockSetVisible,
            getDisabled: () => false,
            setDisabled: mockSetDisabled,
            setFocus: mockSetFocus,
            getAttribute: () => null,
            // WebResource specific
            getSrc: () => 'https://org.crm.dynamics.com/webresources/help.html',
            setSrc: mockWebResourceSetSrc,
            getData: () => 'param1=value1',
            setData: mockWebResourceSetData,
            getObject: () => ({ contentWindow: {} }),
            getContentWindow: mockWebResourceContentWindow
        },
        'v4_iframeexternal': {
            getName: () => 'v4_iframeexternal',
            getControlType: () => 'iframe',
            getLabel: () => 'External Page',
            setLabel: mockSetLabel,
            getVisible: () => true,
            setVisible: mockSetVisible,
            getDisabled: () => false,
            setDisabled: mockSetDisabled,
            setFocus: mockSetFocus,
            getAttribute: () => null,
            // IFrame specific
            getSrc: () => 'https://external.example.com/page',
            setSrc: mockIFrameSetSrc,
            getInitialUrl: () => 'https://external.example.com/initial',
            getObject: () => ({ contentWindow: {} }),
            getContentWindow: mockIFrameContentWindow
        },
        'v4_timersla': {
            getName: () => 'v4_timersla',
            getControlType: () => 'timercontrol',
            getLabel: () => 'SLA Timer',
            setLabel: mockSetLabel,
            getVisible: () => true,
            setVisible: mockSetVisible,
            getDisabled: () => false,
            setDisabled: mockSetDisabled,
            setFocus: mockSetFocus,
            getAttribute: () => null,
            // Timer specific
            refresh: mockTimerRefresh,
            getState: () => 2 // InProgress
        },
        'v4_knowledgesearch': {
            getName: () => 'v4_knowledgesearch',
            getControlType: () => 'kbsearch',
            getLabel: () => 'Knowledge Search',
            setLabel: mockSetLabel,
            getVisible: () => true,
            setVisible: mockSetVisible,
            getDisabled: () => false,
            setDisabled: mockSetDisabled,
            setFocus: mockSetFocus,
            getAttribute: () => null,
            // Knowledge specific
            getSearchQuery: () => 'how to fix',
            setSearchQuery: mockKnowledgeSetSearchQuery,
            getTotalResultCount: () => 5,
            getSelectedResults: () => [{ articleId: 'KB001', title: 'How to Fix Issue' }],
            addOnPostSearch: mockKnowledgeAddPostSearch,
            addOnResultOpened: mockKnowledgeAddResultOpened,
            addOnSelection: mockKnowledgeAddSelection,
            openSearchResult: mockKnowledgeOpenSearchResult,
            removeOnPostSearch: mockKnowledgeRemovePostSearch,
            removeOnResultOpened: mockKnowledgeRemoveResultOpened,
            removeOnSelection: mockKnowledgeRemoveSelection
        }
    };

    // Controls keyed by lowercase name
    const controls: Record<string, any> = {};
    Object.keys(attributes).forEach(key => {
        if (attributes[key]) {
            controls[key] = createControl(key, attributes[key]);
        }
        if (['ownerid'].includes(key)) {
            controls['header_' + key] = createControl('header_' + key, attributes[key]);
        }
    });

    // Merge specialty controls into controls
    Object.assign(controls, specialtyControls);

    // Tab and section mocks
    const mockSection = {
        getName: () => 'BILLING',
        getParent: () => mockTab,
        getLabel: () => 'Billing Section',
        setLabel: jest.fn(),
        getVisible: () => true,
        setVisible: jest.fn()
    };

    const mockSections = {
        get: (name: string) => mockSection,
        getLength: () => 1,
        forEach: (callback: Function) => callback(mockSection, 0)
    };

    const mockTab = {
        getName: () => 'DETAILS_TAB',
        getParent: () => null,
        getLabel: () => 'Details',
        setLabel: jest.fn(),
        getVisible: () => true,
        setVisible: jest.fn(),
        getDisplayState: () => 'expanded',
        setDisplayState: jest.fn(),
        setFocus: jest.fn(),
        sections: mockSections
    };

    const mockTabs = {
        get: (name: string) => mockTab,
        getLength: () => 1,
        forEach: (callback: Function) => callback(mockTab, 0)
    };

    // Grid mock
    const mockGrid = {
        addOnLoad: jest.fn(),
        removeOnLoad: jest.fn(),
        getGrid: () => ({
            getRows: () => ({ getLength: () => 0, get: () => null, forEach: jest.fn() }),
            getSelectedRows: () => ({ getLength: () => 0, get: () => null, forEach: jest.fn() }),
            getTotalRecordCount: () => 0
        }),
        getViewSelector: () => ({ getCurrentView: () => ({ id: '{view-id}', name: 'Active' }), setCurrentView: jest.fn() }),
        getVisible: () => true,
        setVisible: jest.fn(),
        refresh: jest.fn(),
        refreshRibbon: jest.fn(),
        openRelatedGrid: jest.fn(),
        getUrl: () => 'https://test.crm.dynamics.com'
    };

    // Navigation mock
    const mockNavItems = {
        get: (name: string) => ({
            getId: () => name,
            getLabel: () => 'Navigation',
            setLabel: jest.fn(),
            getVisible: () => true,
            setVisible: jest.fn(),
            setFocus: jest.fn()
        }),
        getLength: () => 1,
        forEach: jest.fn()
    };

    return {
        formContext: {
            data: {
                entity: {
                    getId: () => '{entity-guid}',
                    getEntityName: () => 'account',
                    getIsDirty: () => false,
                    isValid: () => true,
                    getDataXml: () => '<entity><name>Test</name></entity>',
                    getEntityReference: () => ({ id: '{entity-guid}', name: 'Test Account', entityType: 'account' }),
                    getPrimaryAttributeValue: () => 'Test Account',
                    addOnPostSave: jest.fn(),
                    removeOnPostSave: jest.fn(),
                    addOnSave: jest.fn(),
                    removeOnSave: jest.fn(),
                    attributes: { get: () => null, getLength: () => 0, forEach: jest.fn() }
                },
                getIsDirty: () => false,
                isValid: () => true,
                refresh: jest.fn().mockResolvedValue(undefined),
                save: jest.fn().mockResolvedValue(undefined),
                addOnLoad: jest.fn(),
                removeOnLoad: jest.fn()
            },
            ui: {
                getFormType: () => formType,
                formSelector: {
                    getCurrentItem: () => ({
                        getId: () => '{form-id}',
                        getLabel: () => 'Account Form'
                    }),
                    items: {
                        getLength: () => 0,
                        get: () => null
                    }
                },
                close: jest.fn(),
                setFormNotification: jest.fn().mockReturnValue(true),
                clearFormNotification: jest.fn().mockReturnValue(true),
                refreshRibbon: jest.fn(),
                addLoaded: jest.fn(),
                removeLoaded: jest.fn(),
                addOnLoad: jest.fn(),
                removeOnLoad: jest.fn(),
                setFormEntityName: jest.fn(),
                getViewPortHeight: () => 800,
                getViewPortWidth: () => 1200,
                controls: { get: () => null, getLength: () => 0, forEach: jest.fn() },
                tabs: mockTabs,
                navigation: { items: mockNavItems }
            },
            getControl: (name: string) => controls[name.toLowerCase()],
            getAttribute: (name: string) => attributes[name.toLowerCase()]
        },
        mocks: {
            mockSetValue, mockSetDisabled, mockSetVisible, mockSetLabel, mockSetRequiredLevel, mockSetSubmitMode, mockAddOnChange, mockFireOnChange, mockSetFocus, mockSetPrecision, mockSetShowTime,
            // Specialty control mocks
            mockWebResourceSetSrc, mockWebResourceSetData, mockWebResourceContentWindow,
            mockIFrameSetSrc, mockIFrameContentWindow,
            mockTimerRefresh,
            mockKnowledgeSetSearchQuery, mockKnowledgeAddPostSearch, mockKnowledgeAddResultOpened, mockKnowledgeAddSelection, mockKnowledgeOpenSearchResult, mockKnowledgeRemovePostSearch, mockKnowledgeRemoveResultOpened, mockKnowledgeRemoveSelection
        }
    };
}

function createMockExecutionContext(formType: number = 2) {
    const { formContext, mocks } = createMockFormContext(formType);
    return {
        executionContext: {
            getFormContext: () => formContext,
            getDepth: () => 1,
            getEventArgs: () => ({
                getDataLoadState: () => 1,
                isDefaultPrevented: () => false,
                preventDefault: jest.fn()
            })
        },
        mocks
    };
}

// ============================================================================
// TEST: String Control (Name)
// ============================================================================
describe('AccountForm - String Control', () => {
    test('should get Value', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.Name.Value).toBe('Test Account');
    });

    test('should set Value', () => {
        const { executionContext, mocks } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        form.Body.Name.Value = 'New Name';
        expect(mocks.mockSetValue).toHaveBeenCalledWith('New Name');
    });

    test('should get MaxLength', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.Name.MaxLength).toBe(100);
    });

    test('should get/set Disabled', () => {
        const { executionContext, mocks } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.Name.Disabled).toBe(false);
        form.Body.Name.Disabled = true;
        expect(mocks.mockSetDisabled).toHaveBeenCalledWith(true);
    });

    test('should get/set Visible', () => {
        const { executionContext, mocks } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.Name.Visible).toBe(true);
        form.Body.Name.Visible = false;
        expect(mocks.mockSetVisible).toHaveBeenCalledWith(false);
    });

    test('should Focus', () => {
        const { executionContext, mocks } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        form.Body.Name.Focus();
        expect(mocks.mockSetFocus).toHaveBeenCalled();
    });
});

// ============================================================================
// TEST: Memo Control (Description)
// ============================================================================
describe('AccountForm - Memo Control', () => {
    test('should get Value', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.Description.Value).toBe('Test Description');
    });

    test('should set Value', () => {
        const { executionContext, mocks } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        form.Body.Description.Value = 'New Description';
        expect(mocks.mockSetValue).toHaveBeenCalledWith('New Description');
    });
});

// ============================================================================
// TEST: Integer Control (NumberOfEmployees)
// ============================================================================
describe('AccountForm - Integer Control', () => {
    test('should get Value', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.NumberOfEmployees.Value).toBe(100);
    });

    test('should set Value', () => {
        const { executionContext, mocks } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        form.Body.NumberOfEmployees.Value = 200;
        expect(mocks.mockSetValue).toHaveBeenCalledWith(200);
    });

    test('should get Max/Min', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.NumberOfEmployees.Max).toBe(1000000);
        expect(form.Body.NumberOfEmployees.Min).toBe(0);
    });
});

// ============================================================================
// TEST: Money Control (Revenue)
// ============================================================================
describe('AccountForm - Money Control', () => {
    test('should get Value', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Header.Revenue.Value).toBe(1000000);
    });

    test('should set Value', () => {
        const { executionContext, mocks } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        form.Header.Revenue.Value = 2000000;
        expect(mocks.mockSetValue).toHaveBeenCalledWith(2000000);
    });
});

// ============================================================================
// TEST: Boolean Control (CreditOnHold)
// ============================================================================
describe('AccountForm - Boolean Control', () => {
    test('should get Value as false', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.CreditOnHold.Value).toBe(false);
    });

    test('should set Value to true', () => {
        const { executionContext, mocks } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        form.Body.CreditOnHold.Value = true;
        expect(mocks.mockSetValue).toHaveBeenCalledWith(true);
    });
});

// ============================================================================
// TEST: OptionSet Control (IndustryCode)
// ============================================================================
describe('AccountForm - OptionSet Control', () => {
    test('should get Value', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.IndustryCode.Value).toBe(7);
    });

    test('should set Value using OptionSet constants', () => {
        const { executionContext, mocks } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        form.Body.IndustryCode.Value = OptionSet.Account.IndustryCode.Financial;
        expect(mocks.mockSetValue).toHaveBeenCalledWith(16);
    });

    test('should get Options', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.IndustryCode.Options).toBeDefined();
        expect(form.Body.IndustryCode.Options.length).toBe(3);
    });

    test('should get Text', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.IndustryCode.Text).toBe('Option 1');
    });
});

// ============================================================================
// TEST: Lookup Control (PrimaryContactId)
// ============================================================================
describe('AccountForm - Lookup Control', () => {
    test('should get Value as array', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        const value = form.Body.PrimaryContactId.Value;
        expect(Array.isArray(value)).toBe(true);
        expect(value![0].id).toBe('{guid}');
        expect(value![0].name).toBe('Test');
    });

    test('should set Value', () => {
        const { executionContext, mocks } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        const newValue = [{ id: '{new-guid}', name: 'New Contact', entityType: 'contact' }];
        form.Body.PrimaryContactId.Value = newValue;
        expect(mocks.mockSetValue).toHaveBeenCalledWith(newValue);
    });
});

// ============================================================================
// TEST: Date Control (v4_Birthday) - DateOnly
// ============================================================================
describe('AccountForm - Date Control (DateOnly)', () => {
    test('should get Value as Date object', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        const value = form.Body.v4_Birthday.Value;
        expect(value).toBeInstanceOf(Date);
        expect(value!.getFullYear()).toBe(2024);
    });

    test('should set Value', () => {
        const { executionContext, mocks } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        const newDate = new Date('2025-06-15');
        form.Body.v4_Birthday.Value = newDate;
        expect(mocks.mockSetValue).toHaveBeenCalledWith(newDate);
    });
});

// ============================================================================
// TEST: DateTime Control (v4_AppointmentTime)
// ============================================================================
describe('AccountForm - DateTime Control', () => {
    test('should get Value as DateTime object', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        const value = form.Body.v4_AppointmentTime.Value;
        expect(value).toBeInstanceOf(Date);
    });

    test('should set Value', () => {
        const { executionContext, mocks } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        const newDateTime = new Date('2025-06-15T14:30:00');
        form.Body.v4_AppointmentTime.Value = newDateTime;
        expect(mocks.mockSetValue).toHaveBeenCalledWith(newDateTime);
    });
});

// ============================================================================
// TEST: Decimal Control (v4_Latitude)
// ============================================================================
describe('AccountForm - Decimal Control', () => {
    test('should get Value', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_Latitude.Value).toBe(40.7128);
    });

    test('should set Value', () => {
        const { executionContext, mocks } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        form.Body.v4_Latitude.Value = 51.5074;
        expect(mocks.mockSetValue).toHaveBeenCalledWith(51.5074);
    });

    test('should get Max/Min', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_Latitude.Max).toBe(1000000);
        expect(form.Body.v4_Latitude.Min).toBe(0);
    });
});

// ============================================================================
// TEST: Double Control (v4_DiscountPercentage)
// ============================================================================
describe('AccountForm - Double Control', () => {
    test('should get Value', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_DiscountPercentage.Value).toBe(15.5);
    });

    test('should set Value', () => {
        const { executionContext, mocks } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        form.Body.v4_DiscountPercentage.Value = 25.75;
        expect(mocks.mockSetValue).toHaveBeenCalledWith(25.75);
    });

    test('should get Max/Min', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_DiscountPercentage.Max).toBe(1000000);
        expect(form.Body.v4_DiscountPercentage.Min).toBe(0);
    });
});

// ============================================================================
// TEST: MultiOptionSet Control (v4_Categories)
// ============================================================================
describe('AccountForm - MultiOptionSet Control', () => {
    test('should get Value as array', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        const value = form.Body.v4_Categories.Value;
        expect(Array.isArray(value)).toBe(true);
        expect(value).toContain(100000000);
        expect(value).toContain(100000001);
    });

    test('should set Value using OptionSet constants', () => {
        const { executionContext, mocks } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        const newValue = [OptionSet.Account.v4_Categories.Category_A, OptionSet.Account.v4_Categories.Category_C];
        form.Body.v4_Categories.Value = newValue;
        expect(mocks.mockSetValue).toHaveBeenCalledWith([100000000, 100000002]);
    });

    test('should get Options', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_Categories.Options).toBeDefined();
        expect(form.Body.v4_Categories.Options.length).toBe(3);
    });
});

// ============================================================================
// TEST: Header Controls
// ============================================================================
describe('AccountForm - Header Controls', () => {
    test('should access Header.OwnerId', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        const owner = form.Header.OwnerId.Value;
        expect(Array.isArray(owner)).toBe(true);
    });
});

// ============================================================================
// TEST: Form Properties
// ============================================================================
describe('AccountForm - Form Properties', () => {
    test('should get FormType', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.FormType).toBe(2);
    });

    test('should get EntityId', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.EntityId).toBe('{entity-guid}');
    });

    test('should get EntityName', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.EntityName).toBe('account');
    });

    test('should get DataIsDirty', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.DataIsDirty).toBe(false);
    });

    test('should get DataIsValid', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.DataIsValid).toBe(true);
    });
});

// ============================================================================
// TEST: Form Methods
// ============================================================================
describe('AccountForm - Form Methods', () => {
    test('should call SetFormNotification', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        const result = form.SetFormNotification('Test message', 'INFO', 'notif1');
        expect(result).toBe(true);
    });

    test('should call ClearFormNotification', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        const result = form.ClearFormNotification('notif1');
        expect(result).toBe(true);
    });

    test('should call RefreshRibbon', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(() => form.RefreshRibbon()).not.toThrow();
    });

    test('should call Close', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(() => form.Close()).not.toThrow();
    });
});

// ============================================================================
// TEST: OptionSet Values
// ============================================================================
describe('OptionSet Values', () => {
    test('IndustryCode values', () => {
        expect(OptionSet.Account.IndustryCode.Accounting).toBe(1);
        expect(OptionSet.Account.IndustryCode.Consulting).toBe(7);
        expect(OptionSet.Account.IndustryCode.Financial).toBe(16);
    });

    test('v4_Categories values (MultiOptionSet)', () => {
        expect(OptionSet.Account.v4_Categories.Category_A).toBe(100000000);
        expect(OptionSet.Account.v4_Categories.Category_B).toBe(100000001);
        expect(OptionSet.Account.v4_Categories.Category_C).toBe(100000002);
        expect(OptionSet.Account.v4_Categories.Category_D).toBe(100000003);
    });
});

// ============================================================================
// TEST: WebResource Control (v4_WebResourceHelp)
// ============================================================================
describe('AccountForm - WebResource Control', () => {
    test('should get ControlType as webresource', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_WebResourceHelp.ControlType).toBe('webresource');
    });

    test('should get Src (URL)', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_WebResourceHelp.Src).toBe('https://org.crm.dynamics.com/webresources/help.html');
    });

    test('should get Data (query string)', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_WebResourceHelp.Data).toBe('param1=value1');
    });

    test('should get Object (DOM element)', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_WebResourceHelp.Object).toBeDefined();
        expect(form.Body.v4_WebResourceHelp.Object.contentWindow).toBeDefined();
    });

    test('should get/set Visible', () => {
        const { executionContext, mocks } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_WebResourceHelp.Visible).toBe(true);
        form.Body.v4_WebResourceHelp.Visible = false;
        expect(mocks.mockSetVisible).toHaveBeenCalledWith(false);
    });
});

// ============================================================================
// TEST: IFrame Control (v4_IFrameExternal)
// ============================================================================
describe('AccountForm - IFrame Control', () => {
    test('should get ControlType as iframe', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_IFrameExternal.ControlType).toBe('iframe');
    });

    test('should get Src (current URL)', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_IFrameExternal.Src).toBe('https://external.example.com/page');
    });

    test('should get InitialUrl (default URL)', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_IFrameExternal.InitialUrl).toBe('https://external.example.com/initial');
    });

    test('should get Object (DOM element)', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_IFrameExternal.Object).toBeDefined();
    });

    test('should get/set Visible', () => {
        const { executionContext, mocks } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_IFrameExternal.Visible).toBe(true);
        form.Body.v4_IFrameExternal.Visible = false;
        expect(mocks.mockSetVisible).toHaveBeenCalledWith(false);
    });
});

// ============================================================================
// TEST: Timer Control (v4_TimerSLA)
// ============================================================================
describe('AccountForm - Timer Control', () => {
    test('should get ControlType as timercontrol', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_TimerSLA.ControlType).toBe('timercontrol');
    });

    test('should get State (timer state)', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_TimerSLA.State).toBe(2); // InProgress
    });

    test('should get/set Visible', () => {
        const { executionContext, mocks } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_TimerSLA.Visible).toBe(true);
        form.Body.v4_TimerSLA.Visible = false;
        expect(mocks.mockSetVisible).toHaveBeenCalledWith(false);
    });
});

// ============================================================================
// TEST: Knowledge Control (v4_KnowledgeSearch)
// ============================================================================
describe('AccountForm - Knowledge Control', () => {
    test('should get ControlType as kbsearch', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_KnowledgeSearch.ControlType).toBe('kbsearch');
    });

    test('should get SearchQuery', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_KnowledgeSearch.SearchQuery).toBe('how to fix');
    });

    test('should get TotalResultCount', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_KnowledgeSearch.TotalResultCount).toBe(5);
    });

    test('should get SelectedResults', () => {
        const { executionContext } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        const results = form.Body.v4_KnowledgeSearch.SelectedResults;
        expect(Array.isArray(results)).toBe(true);
        expect(results[0].articleId).toBe('KB001');
    });

    test('should get/set Visible', () => {
        const { executionContext, mocks } = createMockExecutionContext();
        const form = new AccountForm.Form(executionContext);
        expect(form.Body.v4_KnowledgeSearch.Visible).toBe(true);
        form.Body.v4_KnowledgeSearch.Visible = false;
        expect(mocks.mockSetVisible).toHaveBeenCalledWith(false);
    });
});
