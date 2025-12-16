/**
 * Account Form TypeScript Module
 * Đây là phiên bản TypeScript của entities/Account.form.js
 * File này được generator tự động tạo ra, sau này có thể viết tool để generate đúng format này
 */

import { LoadFormV2, IStringControl, INumberControl, IBooleanControl, IOptionSetControl, ILookupControl, IMoneyControl, ITab, ISection, IGrid, INavigationItem } from './devkit';

// ============================================================================
// Account Form Interfaces - TypeScript tự động có IntelliSense từ interfaces này
// ============================================================================

/** Interface cho các field trong Body của Account form */
export interface IAccountFormBody {
    /** Type an ID number or code for the account to quickly search and identify the account in system views. */
    AccountNumber: IStringControl;
    /** Type the company or business name. */
    Name: IStringControl;
    /** Type the main phone number for this account. */
    Telephone1: IStringControl;
    /** Type the primary email address for the account. */
    EMailAddress1: IStringControl;
    /** Type the fax number for the account. */
    Fax: IStringControl;
    /** Type the account's website URL to get quick details about the company profile. */
    WebSiteURL: IStringControl;
    /** Type additional information to describe the account, such as an excerpt from the company's website. */
    Description: IStringControl;
    /** Type the credit limit of the account. */
    CreditLimit: IMoneyControl;
    /** Type the annual revenue for the account. */
    Revenue: IMoneyControl;
    /** Type the number of employees that work at the account. */
    NumberOfEmployees: INumberControl;
    /** Select whether the credit for the account is on hold. */
    CreditOnHold: IBooleanControl;
    /** Select whether the account allows direct email. */
    DoNotEMail: IBooleanControl;
    /** Select whether the account allows phone calls. */
    DoNotPhone: IBooleanControl;
    /** Select whether the account allows faxes. */
    DoNotFax: IBooleanControl;
    /** Select whether the account allows bulk email. */
    DoNotBulkEMail: IBooleanControl;
    /** Select whether the account allows direct mail. */
    DoNotPostalMail: IBooleanControl;
    /** Information about whether to allow following email activity. */
    FollowEmail: IBooleanControl;
    /** Select the account's primary industry. */
    IndustryCode: IOptionSetControl;
    /** Select the account's ownership structure. */
    OwnershipCode: IOptionSetControl;
    /** Select the payment terms. */
    PaymentTermsCode: IOptionSetControl;
    /** Select the preferred method of contact. */
    PreferredContactMethodCode: IOptionSetControl;
    /** Select the freight terms for the primary address. */
    Address1_FreightTermsCode: IOptionSetControl;
    /** Select a shipping method for deliveries. */
    Address1_ShippingMethodCode: IOptionSetControl;
    /** Choose the parent account associated with this account. */
    ParentAccountId: ILookupControl;
    /** Choose the primary contact for the account. */
    PrimaryContactId: ILookupControl;
    /** Choose the local currency for the record. */
    TransactionCurrencyId: ILookupControl;
    /** Enter the user or team who is assigned to manage the record. */
    OwnerId: ILookupControl;
    /** Type the Standard Industrial Classification (SIC) code. */
    SIC: IStringControl;
    /** Type the stock exchange symbol for the account. */
    TickerSymbol: IStringControl;
    /** Shows the complete primary address. */
    Address1_Composite: IStringControl;
    /** Type the city for the primary address. */
    Address1_City: IStringControl;
    /** Type the first line of the primary address. */
    Address1_Line1: IStringControl;
    /** Type the second line of the primary address. */
    Address1_Line2: IStringControl;
    /** Type the third line of the primary address. */
    Address1_Line3: IStringControl;
    /** Type the ZIP Code or postal code for the primary address. */
    Address1_PostalCode: IStringControl;
    /** Type the state or province of the primary address. */
    Address1_StateOrProvince: IStringControl;
    /** Type the country or region for the primary address. */
    Address1_Country: IStringControl;
    /** Type a descriptive name for the primary address. */
    Address1_Name: IStringControl;
    /** Type the main phone number associated with the primary address. */
    Address1_Telephone1: IStringControl;
}

/** Interface cho các field trong Header của Account form */
export interface IAccountFormHeader {
    /** Type the number of employees that work at the account. */
    NumberOfEmployees: INumberControl;
    /** Enter the user or team who is assigned to manage the record. */
    OwnerId: ILookupControl;
    /** Type the annual revenue for the account. */
    Revenue: IMoneyControl;
    /** Type the credit limit of the account. */
    CreditLimit: IMoneyControl;
    /** Select the preferred method of contact. */
    PreferredContactMethodCode: IOptionSetControl;
    /** Choose the primary contact for the account. */
    PrimaryContactId: ILookupControl;
}

/** Interface cho Section trong Tab */
export interface IAccountTabSections {
    [key: string]: ISection;
}

/** Interface cho Tab trong Account form */
export interface IAccountFormTab extends ITab {
    Section: IAccountTabSections;
}

/** Interface cho tất cả Tabs trong Account form */
export interface IAccountFormTabs {
    /** Summary Tab */
    SUMMARY_TAB: IAccountFormTab;
    /** Details Tab */
    DETAILS_TAB: IAccountFormTab;
    /** General Tab */
    general: IAccountFormTab;
    /** Details Tab (alternate) */
    details: IAccountFormTab;
    /** Administration Tab */
    administration: IAccountFormTab;
    /** Contacts Tab */
    contacts: IAccountFormTab;
    /** Notes and Activities Tab */
    notes_and_activities: IAccountFormTab;
    /** Tab 1 (Quick Create) */
    tab_1: IAccountFormTab;
}

/** Interface cho Grid trong Account form */
export interface IAccountFormGrid {
    /** Child Accounts subgrid */
    ChildAccounts: IGrid;
    /** Contacts subgrid */
    Contacts: IGrid;
    /** Account Activities Grid */
    accountactivitiesgrid: IGrid;
    /** Account Contacts Grid */
    accountContactsGrid: IGrid;
}

/** Interface cho Navigation trong Account form */
export interface IAccountFormNavigation {
    account_adx_inviteredemptions: INavigationItem;
    account_adx_portalcomments: INavigationItem;
    Account_Appointments: INavigationItem;
    account_DeletedItemReferences: INavigationItem;
    Account_Email_EmailSender: INavigationItem;
    Account_Email_SendersAccount: INavigationItem;
    Account_Emails: INavigationItem;
    account_parent_account: INavigationItem;
    Account_Phonecalls: INavigationItem;
    Account_Tasks: INavigationItem;
    adx_invitation_assigntoaccount: INavigationItem;
    contact_customer_accounts: INavigationItem;
    msa_account_managingpartner: INavigationItem;
    msa_contact_managingpartner: INavigationItem;
}

/** Interface cho QuickForm trong Account form */
export interface IAccountFormQuickForm {
    contactquickform: {
        Body: {
            EMailAddress1: any;
            Telephone1: any;
        };
        IsLoaded: () => boolean;
        Refresh: () => void;
        Focus: () => void;
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
