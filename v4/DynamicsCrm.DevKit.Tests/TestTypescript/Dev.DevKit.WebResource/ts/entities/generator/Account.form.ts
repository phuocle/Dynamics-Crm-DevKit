/**
 * Account Form TypeScript Module
 * Đây là phiên bản TypeScript của entities/Account.form.js
 * File này được generator tự động tạo ra, sau này có thể viết tool để generate đúng format này
 * 
 * @description Uses DevKit.Controls types from devkit.d.ts for IntelliSense support
 */

/// <reference path="../../lib/devkit.d.ts" />
import { LoadFormV2 } from '../../lib/devkit';

// ============================================================================
// Account Form Interfaces - Uses DevKit.Controls.* types for IntelliSense
// ============================================================================

/** Interface cho các field trong Body của Account form */
export interface IAccountFormBody {
    /** Type an ID number or code for the account to quickly search and identify the account in system views. */
    AccountNumber: DevKit.Controls.String;
    /** Type the company or business name. */
    Name: DevKit.Controls.String;
    /** Type the main phone number for this account. */
    Telephone1: DevKit.Controls.String;
    /** Type the primary email address for the account. */
    EMailAddress1: DevKit.Controls.String;
    /** Type the fax number for the account. */
    Fax: DevKit.Controls.String;
    /** Type the account's website URL to get quick details about the company profile. */
    WebSiteURL: DevKit.Controls.String;
    /** Type additional information to describe the account, such as an excerpt from the company's website. */
    Description: DevKit.Controls.String;
    /** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
    CreditLimit: DevKit.Controls.Money;
    /** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
    Revenue: DevKit.Controls.Money;
    /** Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. */
    NumberOfEmployees: DevKit.Controls.Integer;
    /** Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer. */
    CreditOnHold: DevKit.Controls.Boolean;
    /** Select whether the account allows direct email sent from Microsoft Dynamics 365. */
    DoNotEMail: DevKit.Controls.Boolean;
    /** Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns. */
    DoNotPhone: DevKit.Controls.Boolean;
    /** Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns. */
    DoNotFax: DevKit.Controls.Boolean;
    /** Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email. */
    DoNotBulkEMail: DevKit.Controls.Boolean;
    /** Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns. */
    DoNotPostalMail: DevKit.Controls.Boolean;
    /** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account. */
    FollowEmail: DevKit.Controls.Boolean;
    /** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
    IndustryCode: DevKit.Controls.OptionSet;
    /** Select the account's ownership structure, such as public or private. */
    OwnershipCode: DevKit.Controls.OptionSet;
    /** Select the payment terms to indicate when the customer needs to pay the total amount. */
    PaymentTermsCode: DevKit.Controls.OptionSet;
    /** Select the preferred method of contact. */
    PreferredContactMethodCode: DevKit.Controls.OptionSet;
    /** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
    Address1_FreightTermsCode: DevKit.Controls.OptionSet;
    /** Select a shipping method for deliveries sent to this address. */
    Address1_ShippingMethodCode: DevKit.Controls.OptionSet;
    /** Choose the parent account associated with this account to show parent and child businesses in reporting and analytics. */
    ParentAccountId: DevKit.Controls.Lookup;
    /** Choose the primary contact for the account to provide quick access to contact details. */
    PrimaryContactId: DevKit.Controls.Lookup;
    /** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
    TransactionCurrencyId: DevKit.Controls.Lookup;
    /** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
    OwnerId: DevKit.Controls.Lookup;
    /** Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis. */
    SIC: DevKit.Controls.String;
    /** Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money. */
    TickerSymbol: DevKit.Controls.String;
    /** Shows the complete primary address. */
    Address1_Composite: DevKit.Controls.String;
    /** Type the city for the primary address. */
    Address1_City: DevKit.Controls.String;
    /** Type the first line of the primary address. */
    Address1_Line1: DevKit.Controls.String;
    /** Type the second line of the primary address. */
    Address1_Line2: DevKit.Controls.String;
    /** Type the third line of the primary address. */
    Address1_Line3: DevKit.Controls.String;
    /** Type the ZIP Code or postal code for the primary address. */
    Address1_PostalCode: DevKit.Controls.String;
    /** Type the state or province of the primary address. */
    Address1_StateOrProvince: DevKit.Controls.String;
    /** Type the country or region for the primary address. */
    Address1_Country: DevKit.Controls.String;
    /** Type a descriptive name for the primary address, such as Corporate Headquarters. */
    Address1_Name: DevKit.Controls.String;
    /** Type the main phone number associated with the primary address. */
    Address1_Telephone1: DevKit.Controls.String;
}

/** Interface cho các field trong Header của Account form */
export interface IAccountFormHeader {
    /** Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. */
    NumberOfEmployees: DevKit.Controls.Integer;
    /** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
    OwnerId: DevKit.Controls.Lookup;
    /** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
    Revenue: DevKit.Controls.Money;
    /** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
    CreditLimit: DevKit.Controls.Money;
    /** Select the preferred method of contact. */
    PreferredContactMethodCode: DevKit.Controls.OptionSet;
    /** Choose the primary contact for the account to provide quick access to contact details. */
    PrimaryContactId: DevKit.Controls.Lookup;
}

// ============================================================================
// Tab Section Interfaces - Specific sections for each tab
// ============================================================================

/** Sections trong SUMMARY_TAB */
export interface ISummaryTabSections {
    /** Account Information Section */
    ACCOUNT_INFORMATION: DevKit.Controls.Section;
    /** Address Section */
    ADDRESS: DevKit.Controls.Section;
    /** Map Section */
    MapSection: DevKit.Controls.Section;
    /** Social Pane Tab Section */
    SOCIAL_PANE_TAB: DevKit.Controls.Section;
    /** Summary Section 6 */
    Summary_section_6: DevKit.Controls.Section;
    /** Summary Tab Section 6 */
    SUMMARY_TAB_section_6: DevKit.Controls.Section;
    /** Timeline Section (for Interactive experience form) */
    Timeline: DevKit.Controls.Section;
}

/** Sections trong DETAILS_TAB */
export interface IDetailsTabSections {
    /** Billing Section */
    BILLING: DevKit.Controls.Section;
    /** Child Accounts Section */
    ChildAccounts: DevKit.Controls.Section;
    /** Company Profile Section */
    COMPANY_PROFILE: DevKit.Controls.Section;
    /** Contact Preferences Section */
    CONTACT_PREFERENCES: DevKit.Controls.Section;
    /** Details Tab Section 6 */
    DETAILS_TAB_section_6: DevKit.Controls.Section;
    /** Shipping Section */
    SHIPPING: DevKit.Controls.Section;
}

/** Sections trong general tab */
export interface IGeneralTabSections {
    /** Account Information Section */
    account_information: DevKit.Controls.Section;
    /** Address Section */
    address: DevKit.Controls.Section;
    /** Description Section */
    description: DevKit.Controls.Section;
    /** Shipping Information Section */
    shipping_information: DevKit.Controls.Section;
}

/** Sections trong details tab */
export interface IDetailsTab2Sections {
    /** Professional Information Section */
    professional_information: DevKit.Controls.Section;
    /** Billing Information Section */
    billing_information: DevKit.Controls.Section;
    /** Description 2 Section */
    description_2: DevKit.Controls.Section;
}

/** Sections trong administration tab */
export interface IAdministrationTabSections {
    /** Contact Methods Section */
    contact_methods: DevKit.Controls.Section;
    /** Internal Information Section */
    internal_information: DevKit.Controls.Section;
}

/** Sections trong contacts tab */
export interface IContactsTabSections {
    /** Contacts Section */
    contacts: DevKit.Controls.Section;
}

/** Sections trong notes_and_activities tab */
export interface INotesAndActivitiesTabSections {
    /** Activities Section */
    activities: DevKit.Controls.Section;
    /** Notes Section */
    notes: DevKit.Controls.Section;
}

/** Sections trong tab_1 (Quick Create) */
export interface ITab1Sections {
    /** Tab 1 Column 1 Section 1 */
    tab_1_column_1_section_1: DevKit.Controls.Section;
    /** Tab 1 Column 2 Section 1 */
    tab_1_column_2_section_1: DevKit.Controls.Section;
    /** Tab 1 Column 3 Section 1 */
    tab_1_column_3_section_1: DevKit.Controls.Section;
}

// ============================================================================
// Tab Interfaces - Each tab with specific Section type
// ============================================================================

/** Interface cho SUMMARY_TAB */
export interface ISummaryTab extends DevKit.Controls.ITab {
    Section: ISummaryTabSections;
}

/** Interface cho DETAILS_TAB */
export interface IDetailsTab extends DevKit.Controls.ITab {
    Section: IDetailsTabSections;
}

/** Interface cho general tab */
export interface IGeneralTab extends DevKit.Controls.ITab {
    Section: IGeneralTabSections;
}

/** Interface cho details tab (alternate) */
export interface IDetailsTab2 extends DevKit.Controls.ITab {
    Section: IDetailsTab2Sections;
}

/** Interface cho administration tab */
export interface IAdministrationTab extends DevKit.Controls.ITab {
    Section: IAdministrationTabSections;
}

/** Interface cho contacts tab */
export interface IContactsTab extends DevKit.Controls.ITab {
    Section: IContactsTabSections;
}

/** Interface cho notes_and_activities tab */
export interface INotesAndActivitiesTab extends DevKit.Controls.ITab {
    Section: INotesAndActivitiesTabSections;
}

/** Interface cho tab_1 (Quick Create) */
export interface ITab1 extends DevKit.Controls.ITab {
    Section: ITab1Sections;
}

/** Interface cho tất cả Tabs trong Account form */
export interface IAccountFormTabs {
    /** Summary Tab */
    SUMMARY_TAB: ISummaryTab;
    /** Details Tab */
    DETAILS_TAB: IDetailsTab;
    /** General Tab */
    general: IGeneralTab;
    /** Details Tab (alternate) */
    details: IDetailsTab2;
    /** Administration Tab */
    administration: IAdministrationTab;
    /** Contacts Tab */
    contacts: IContactsTab;
    /** Notes and Activities Tab */
    notes_and_activities: INotesAndActivitiesTab;
    /** Tab 1 (Quick Create) */
    tab_1: ITab1;
}

/** Interface cho Grid trong Account form */
export interface IAccountFormGrid {
    /** Child Accounts subgrid */
    ChildAccounts: DevKit.Controls.Grid;
    /** Contacts subgrid */
    Contacts: DevKit.Controls.Grid;
    /** Account Activities Grid */
    accountactivitiesgrid: DevKit.Controls.Grid;
    /** Account Contacts Grid */
    accountContactsGrid: DevKit.Controls.Grid;
}

/** Interface cho Navigation trong Account form */
export interface IAccountFormNavigation {
    account_adx_inviteredemptions: DevKit.Controls.NavigationItem;
    account_adx_portalcomments: DevKit.Controls.NavigationItem;
    Account_Appointments: DevKit.Controls.NavigationItem;
    account_DeletedItemReferences: DevKit.Controls.NavigationItem;
    Account_Email_EmailSender: DevKit.Controls.NavigationItem;
    Account_Email_SendersAccount: DevKit.Controls.NavigationItem;
    Account_Emails: DevKit.Controls.NavigationItem;
    account_parent_account: DevKit.Controls.NavigationItem;
    Account_Phonecalls: DevKit.Controls.NavigationItem;
    Account_Tasks: DevKit.Controls.NavigationItem;
    adx_invitation_assigntoaccount: DevKit.Controls.NavigationItem;
    contact_customer_accounts: DevKit.Controls.NavigationItem;
    msa_account_managingpartner: DevKit.Controls.NavigationItem;
    msa_contact_managingpartner: DevKit.Controls.NavigationItem;
}

/** Interface cho QuickForm trong Account form */
export interface IAccountFormQuickForm {
    contactquickform: DevKit.Controls.IQuickView & {
        Body: {
            EMailAddress1: DevKit.Controls.QuickView;
            Telephone1: DevKit.Controls.QuickView;
        };
    };
}

// ============================================================================
// Account Form Class - Class chính được export
// ============================================================================

/**
 * Account Form class
 * Sử dụng: const form = new AccountForm(executionContext);
 */
export class AccountForm {
    /** The Body section of form Account */
    public Body: IAccountFormBody;
    /** The Header section of form Account */
    public Header: IAccountFormHeader;
    /** The Tabs of form Account */
    public Tab: IAccountFormTabs;
    /** The Grid of form Account */
    public Grid: IAccountFormGrid;
    /** The Navigation of form Account */
    public Navigation: IAccountFormNavigation;
    /** The QuickForm of form Account */
    public QuickForm: IAccountFormQuickForm;
    /** Form ID */
    public readonly FormId: string;
    /** Form Label */
    public readonly FormLabel: string;
    /** Form Type */
    public readonly FormType: number;
    /** Entity ID */
    public readonly EntityId: string;
    /** Entity Name */
    public readonly EntityName: string;
    /** Check if data is dirty */
    public readonly DataIsDirty: boolean;
    /** Check if data is valid */
    public readonly DataIsValid: boolean;

    /** Execution Context */
    public ExecutionContext: any;

    /** Save form */
    public Save: (saveOptions?: any) => Promise<void>;
    /** Refresh form */
    public Refresh: (save?: boolean) => Promise<void>;
    /** Close form */
    public Close: () => void;
    /** Set form notification */
    public SetFormNotification: (message: string, level: string, uniqueId: string) => boolean;
    /** Clear form notification */
    public ClearFormNotification: (uniqueId: string) => boolean;
    /** Refresh ribbon */
    public RefreshRibbon: (refreshAll?: boolean) => void;
    /** Add loaded callback */
    public UiAddLoaded: (callback: (context: any) => void) => void;
    /** Remove loaded callback */
    public UiRemoveLoaded: (callback: (context: any) => void) => void;

    /**
     * Account Form constructor
     * @param executionContext the execution context
     * @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
     */
    constructor(executionContext: any, defaultWebResourceName?: string) {
        const formConfig = {
            body: [
                "AccountNumber", "Name", "Telephone1", "EMailAddress1", "Fax", "WebSiteURL",
                "Description", "CreditLimit", "Revenue", "NumberOfEmployees", "CreditOnHold",
                "DoNotEMail", "DoNotPhone", "DoNotFax", "DoNotBulkEMail", "DoNotPostalMail",
                "FollowEmail", "IndustryCode", "OwnershipCode", "PaymentTermsCode",
                "PreferredContactMethodCode", "Address1_FreightTermsCode", "Address1_ShippingMethodCode",
                "ParentAccountId", "PrimaryContactId", "TransactionCurrencyId", "OwnerId",
                "SIC", "TickerSymbol", "Address1_Composite", "Address1_City", "Address1_Line1",
                "Address1_Line2", "Address1_Line3", "Address1_PostalCode", "Address1_StateOrProvince",
                "Address1_Country", "Address1_Name", "Address1_Telephone1"
            ],
            header: ["NumberOfEmployees", "OwnerId", "Revenue", "CreditLimit", "PreferredContactMethodCode", "PrimaryContactId"],
            tab: [
                "SUMMARY_TAB___ACCOUNT_INFORMATION", "SUMMARY_TAB___ADDRESS", "SUMMARY_TAB___SOCIAL_PANE_TAB",
                "DETAILS_TAB___COMPANY_PROFILE", "DETAILS_TAB___BILLING", "DETAILS_TAB___SHIPPING",
                "DETAILS_TAB___CONTACT_PREFERENCES", "DETAILS_TAB___ChildAccounts",
                "general___account_information", "general___address", "general___description",
                "details___professional_information", "details___billing_information",
                "administration___contact_methods", "administration___internal_information",
                "contacts___contacts", "notes_and_activities___activities", "notes_and_activities___notes",
                "tab_1___tab_1_column_1_section_1", "tab_1___tab_1_column_2_section_1", "tab_1___tab_1_column_3_section_1"
            ],
            grid: ["ChildAccounts", "Contacts", "accountactivitiesgrid", "accountContactsGrid"],
            navigation: [
                "account_adx_inviteredemptions", "account_adx_portalcomments", "Account_Appointments",
                "account_DeletedItemReferences", "Account_Email_EmailSender", "Account_Email_SendersAccount",
                "Account_Emails", "account_parent_account", "Account_Phonecalls", "Account_Tasks",
                "adx_invitation_assigntoaccount", "contact_customer_accounts", "msa_account_managingpartner",
                "msa_contact_managingpartner"
            ],
            quick: ["contactquickform___EMailAddress1", "contactquickform___Telephone1"]
        };

        const form = LoadFormV2<IAccountFormBody, IAccountFormHeader, IAccountFormTabs, IAccountFormGrid, IAccountFormNavigation, IAccountFormQuickForm>(
            executionContext,
            defaultWebResourceName,
            formConfig
        );

        this.ExecutionContext = form.ExecutionContext;
        this.Body = form.Body;
        this.Header = form.Header;
        this.Tab = form.Tab;
        this.Grid = form.Grid;
        this.Navigation = form.Navigation;
        this.QuickForm = form.QuickForm;
        this.FormId = form.FormId;
        this.FormLabel = form.FormLabel;
        this.FormType = form.FormType;
        this.EntityId = form.EntityId;
        this.EntityName = form.EntityName;
        this.DataIsDirty = form.DataIsDirty;
        this.DataIsValid = form.DataIsValid;
        this.Save = form.Save;
        this.Refresh = form.Refresh;
        this.Close = form.Close;
        this.SetFormNotification = form.SetFormNotification;
        this.ClearFormNotification = form.ClearFormNotification;
        this.RefreshRibbon = form.RefreshRibbon;
        this.UiAddLoaded = form.UiAddLoaded;
        this.UiRemoveLoaded = form.UiRemoveLoaded;
    }
}

// ============================================================================
// OptionSet - Các giá trị OptionSet cho Account entity
// ============================================================================

export namespace OptionSet {
    export namespace Account {
        export const AccountCategoryCode = {
            Preferred_Customer: 1,
            Standard: 2
        } as const;

        export const IndustryCode = {
            Accounting: 1,
            Agriculture_and_Non_petrol_Natural_Resource_Extraction: 2,
            Broadcasting_Printing_and_Publishing: 3,
            Brokers: 4,
            Building_Supply_Retail: 5,
            Business_Services: 6,
            Consulting: 7,
            Consumer_Services: 8,
            Design_Direction_and_Creative_Management: 9,
            Distributors_Dispatchers_and_Processors: 10,
            Doctors_Offices_and_Clinics: 11,
            Durable_Manufacturing: 12,
            Eating_and_Drinking_Places: 13,
            Entertainment_Retail: 14,
            Equipment_Rental_and_Leasing: 15,
            Financial: 16,
            Food_and_Tobacco_Processing: 17,
            Inbound_Capital_Intensive_Processing: 18,
            Inbound_Repair_and_Services: 19,
            Insurance: 20,
            Legal_Services: 21,
            Non_Durable_Merchandise_Retail: 22,
            Outbound_Consumer_Service: 23,
            Petrochemical_Extraction_and_Distribution: 24,
            Service_Retail: 25,
            SIG_Affiliations: 26,
            Social_Services: 27,
            Special_Outbound_Trade_Contractors: 28,
            Specialty_Realty: 29,
            Transportation: 30,
            Utility_Creation_and_Distribution: 31,
            Vehicle_Retail: 32,
            Wholesale: 33
        } as const;

        export const OwnershipCode = {
            Other: 4,
            Private: 2,
            Public: 1,
            Subsidiary: 3
        } as const;

        export const PaymentTermsCode = {
            _2_10_Net_30: 2,
            Net_30: 1,
            Net_45: 3,
            Net_60: 4
        } as const;

        export const PreferredContactMethodCode = {
            Any: 1,
            Email: 2,
            Fax: 4,
            Mail: 5,
            Phone: 3
        } as const;

        export const StateCode = {
            Active: 0,
            Inactive: 1
        } as const;

        export const StatusCode = {
            Active: 1,
            Inactive: 2
        } as const;
    }
}
