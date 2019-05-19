///<reference path='devkit.d.ts' />
declare namespace Rocket {
    interface FormAccountHeader {

    }
    interface FormAccountBody {

    }
    interface FormAccountFooter {

    }
    interface FormAccountNavigation {

    }
    interface FormAccountQuickForm {

    }
    class FormAccount {
        /**
         * PL.DynamicsCrm.DevKit form Account
         * @param executionContext the execution context.
         * @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource".
         */
        constructor(executionContext: any, defaultWebResourceName?: string);
        /** Utility functions/methods/objects for Dynamics 365 form */
        Utility: DevKit.Form.Utility;
        /** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
        WebApi: DevKit.Form.WebApi;
        /** The Body section of form Account */
        Body: FormAccountBody;
        /** The Footer section of form Account */
        Footer: FormAccountFooter;
        /** The Header section of form Account */
        Header: FormAccountHeader;
        /** The Navigation section of form Account */
        Navigation: FormAccountNavigation;
        /** The QuickForm section of form Account */
        QuickForm: FormAccountQuickForm;
        /**
        * Adds a function to be called when the record is saved
        * @param successCallback The function to be executed when the record is saved. The function will be added to the bottom of the event handler pipeline. The execution context is automatically passed as the first parameter to the function
        * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/addonsave
        */
        AddOnSave(successCallback: (executionContext: any) => void): void;
        /**
         *  The Attributes collections of form Account
         *  @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes
         * */
        Attributes: DevKit.Form.Collections;
        /**
         * Removes form level notifications
         * @param uniqueId A unique identifier for the message to be cleared that was set using the SetFormNotification method
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/clearformnotification
         */
        ClearFormNotification(uniqueId: string): void;
        /**
         * Closes the form
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/close
         * */
        Close(): void;
        /**
         * A control represents an HTML element present on the form. Some controls are bound to a specific attribute, whereas others may represent unbound controls such as an IFRAME, Web resource, or a sub grid that has been added to the form
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls
         */
        Controls: DevKit.Form.Collections;
        /**
         * Returns a string representing the XML that will be sent to the server when the record is saved. Only data in fields that have changed are set to the server
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getdataxml
         */
        DataXml: string;
        /**
         * Returns a string representing the GUID value for the record
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getid
         */
        EntityId: string;
        /**
         * Gets a boolean value indicating whether any fields in the form have been modified
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getisdirty
         */
        EntityIsDirty: boolean;
        /**
         * Gets a boolean value indicating whether all of the entity data is valid
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/isvalid
         */
        EntityIsValid: boolean;
        /**
         * Returns a string representing the logical name of the entity for the record
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getentityname
         */
        EntityName: string;
        /**
         * Returns a lookup value that references the record
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getentityreference
         */
        EntityReference: DevKit.Core.EntityReference;
        /**
         * Saves the record synchronously with the options to close the form or open a new form after the save is completed
         * @param saveOption Specify options for saving the record
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/save
         */
        EntitySave(saveOption: OptionSet.SaveOption): void;
        /**
         * Returns the ID of the form
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector/getid
         */
        FormId: string;
        /**
         * Returns the label of the form
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector/getlabel
         */
        FormLabel: string;
        /**
         * Opens the specified form. When you use the navigate method while unsaved changes exist, the user is prompted to save changes before the new form can be displayed. The Onload event occurs when the new form loads
         * @param formId The form Id that you want navigate
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector/navigate
         */
        FormNavigate(formId: string): void;
        /**
         * Gets the form type for the record
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/getformtype
         */
        FormType: OptionSet.FormType;
        /**
         * Gets a boolean value indicating whether the form data has been modified
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/getisdirty
         */
        IsDirty: boolean;
        /**
         * Gets a boolean value indicating whether all of the form data is valid. This includes the main entity and any unbound attributes
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/isvalid
         */
        IsValid: boolean;
        /**
         * Gets a string for the value of the primary attribute of the entity
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getprimaryattributevalue
         */
        PrimaryAttributeValue: string;
        /**
         * Asynchronously refreshes and optionally saves all the data of the form without reloading the page
         * @param save true if the data should be saved after it is refreshed, otherwise false
         * @param successCallback A function to call when the operation succeeds
         * @param errorCallback A function to call when the operation fails
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/refresh
         */
        Refresh(save?: boolean, successCallback?: (executionContext: any) => void, errorCallback?: (error: DevKit.Core.Error) => void): void;
        /**
         * Causes the ribbon to re-evaluate data that controls what is displayed in it
         * @param refreshAll Indicates whether all the ribbon command bars on the current page are refreshed. If you specify false, only the page-level ribbon command bar is refreshed. If you do not specify this parameter, by default false is passed
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/refreshribbon
         */
        RefreshRibbon(refreshAll: boolean): void;
        /**
         * Removes a function to be called when form data is loaded
         * @param myFunction The function to be removed for the OnSave event
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/removeonsave
         */
        RemoveOnSave(myFunction: () => void): void;
        /**
         * Saves the record asynchronously with the option to set callback functions to be executed after the save operation is completed. You can also set an object to control how appointment, recurring appointment, or service activity records are processed
         * @param saveOption An object for specifying options for saving the record
         * @param successCallback A function to call when the operation succeeds
         * @param errorCallback A function to call when the operation fails
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/save
         */
        Save(saveOption?: DevKit.Core.SaveOption, successCallback?: (executionContext: any) => void, errorCallback?: (error: DevKit.Core.Error) => void): void;
        /**
         * Displays form level notifications
         * @param message The text of the message
         * @param level The level of the message, which defines how the message will be displayed
         * @param uniqueId A unique identifier for the message that can be used later with ClearFormNotification to remove the notification
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/setformnotification
         */
        SetFormNotification(message: string, level: OptionSet.FormNotificationLevel, uniqueId: string): boolean;
        /**
         * Gets the height of the viewport in pixels. The viewport is the area of the page containing form data. It corresponds to the body of the form and does not include the navigation, header, footer or form assistant areas of the page
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/getviewportheight
         * */
        ViewPortHeight(): number;
        /**
         * Get the width of the viewport in pixels. The viewport is the area of the page containing form data. It corresponds to the body of the form and does not include the navigation, header, footer or form assistant areas of the page
         * @link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/getviewportwidth
         * */
        ViewPortWidth(): number;
    }
	class AccountApi {
		/**
		* PL.DynamicsCrm.DevKit AccountApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Select a category to indicate whether the customer account is standard or preferred. */
		AccountCategoryCode: DevKit.WebApi.OptionSetValue;
		/** Select a classification code to indicate the potential value of the customer account based on the projected return on investment, cooperation level, sales cycle length or other criteria. */
		AccountClassificationCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the account. */
		AccountId: DevKit.WebApi.GuidValue;
		/** Type an ID number or code for the account to quickly search and identify the account in system views. */
		AccountNumber: DevKit.WebApi.StringValue;
		/** Select a rating to indicate the value of the customer account. */
		AccountRatingCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for address 1. */
		Address1_AddressId: DevKit.WebApi.GuidValue;
		/** Select the primary address type. */
		Address1_AddressTypeCode: DevKit.WebApi.OptionSetValue;
		/** Type the city for the primary address. */
		Address1_City: DevKit.WebApi.StringValue;
		/** ReadOnly - Shows the complete primary address. */
		Address1_Composite: DevKit.WebApi.StringValue;
		/** Type the country or region for the primary address. */
		Address1_Country: DevKit.WebApi.StringValue;
		/** Type the county for the primary address. */
		Address1_County: DevKit.WebApi.StringValue;
		/** Type the fax number associated with the primary address. */
		Address1_Fax: DevKit.WebApi.StringValue;
		/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
		Address1_FreightTermsCode: DevKit.WebApi.OptionSetValue;
		/** Type the latitude value for the primary address for use in mapping and other applications. */
		Address1_Latitude: DevKit.WebApi.DoubleValue;
		/** Type the first line of the primary address. */
		Address1_Line1: DevKit.WebApi.StringValue;
		/** Type the second line of the primary address. */
		Address1_Line2: DevKit.WebApi.StringValue;
		/** Type the third line of the primary address. */
		Address1_Line3: DevKit.WebApi.StringValue;
		/** Type the longitude value for the primary address for use in mapping and other applications. */
		Address1_Longitude: DevKit.WebApi.DoubleValue;
		/** Type a descriptive name for the primary address, such as Corporate Headquarters. */
		Address1_Name: DevKit.WebApi.StringValue;
		/** Type the ZIP Code or postal code for the primary address. */
		Address1_PostalCode: DevKit.WebApi.StringValue;
		/** Type the post office box number of the primary address. */
		Address1_PostOfficeBox: DevKit.WebApi.StringValue;
		/** Type the name of the main contact at the account's primary address. */
		Address1_PrimaryContactName: DevKit.WebApi.StringValue;
		/** Select a shipping method for deliveries sent to this address. */
		Address1_ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** Type the state or province of the primary address. */
		Address1_StateOrProvince: DevKit.WebApi.StringValue;
		/** Type the main phone number associated with the primary address. */
		Address1_Telephone1: DevKit.WebApi.StringValue;
		/** Type a second phone number associated with the primary address. */
		Address1_Telephone2: DevKit.WebApi.StringValue;
		/** Type a third phone number associated with the primary address. */
		Address1_Telephone3: DevKit.WebApi.StringValue;
		/** Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address1_UPSZone: DevKit.WebApi.StringValue;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address1_UTCOffset: DevKit.WebApi.IntegerValue;
		/** Unique identifier for address 2. */
		Address2_AddressId: DevKit.WebApi.GuidValue;
		/** Select the secondary address type. */
		Address2_AddressTypeCode: DevKit.WebApi.OptionSetValue;
		/** Type the city for the secondary address. */
		Address2_City: DevKit.WebApi.StringValue;
		/** ReadOnly - Shows the complete secondary address. */
		Address2_Composite: DevKit.WebApi.StringValue;
		/** Type the country or region for the secondary address. */
		Address2_Country: DevKit.WebApi.StringValue;
		/** Type the county for the secondary address. */
		Address2_County: DevKit.WebApi.StringValue;
		/** Type the fax number associated with the secondary address. */
		Address2_Fax: DevKit.WebApi.StringValue;
		/** Select the freight terms for the secondary address to make sure shipping orders are processed correctly. */
		Address2_FreightTermsCode: DevKit.WebApi.OptionSetValue;
		/** Type the latitude value for the secondary address for use in mapping and other applications. */
		Address2_Latitude: DevKit.WebApi.DoubleValue;
		/** Type the first line of the secondary address. */
		Address2_Line1: DevKit.WebApi.StringValue;
		/** Type the second line of the secondary address. */
		Address2_Line2: DevKit.WebApi.StringValue;
		/** Type the third line of the secondary address. */
		Address2_Line3: DevKit.WebApi.StringValue;
		/** Type the longitude value for the secondary address for use in mapping and other applications. */
		Address2_Longitude: DevKit.WebApi.DoubleValue;
		/** Type a descriptive name for the secondary address, such as Corporate Headquarters. */
		Address2_Name: DevKit.WebApi.StringValue;
		/** Type the ZIP Code or postal code for the secondary address. */
		Address2_PostalCode: DevKit.WebApi.StringValue;
		/** Type the post office box number of the secondary address. */
		Address2_PostOfficeBox: DevKit.WebApi.StringValue;
		/** Type the name of the main contact at the account's secondary address. */
		Address2_PrimaryContactName: DevKit.WebApi.StringValue;
		/** Select a shipping method for deliveries sent to this address. */
		Address2_ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** Type the state or province of the secondary address. */
		Address2_StateOrProvince: DevKit.WebApi.StringValue;
		/** Type the main phone number associated with the secondary address. */
		Address2_Telephone1: DevKit.WebApi.StringValue;
		/** Type a second phone number associated with the secondary address. */
		Address2_Telephone2: DevKit.WebApi.StringValue;
		/** Type a third phone number associated with the secondary address. */
		Address2_Telephone3: DevKit.WebApi.StringValue;
		/** Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
		Address2_UPSZone: DevKit.WebApi.StringValue;
		/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
		Address2_UTCOffset: DevKit.WebApi.IntegerValue;
		/** ReadOnly - For system use only. */
		Aging30: DevKit.WebApi.MoneyValue;
		/** ReadOnly - The base currency equivalent of the aging 30 field. */
		Aging30_Base: DevKit.WebApi.MoneyValue;
		/** ReadOnly - For system use only. */
		Aging60: DevKit.WebApi.MoneyValue;
		/** ReadOnly - The base currency equivalent of the aging 60 field. */
		Aging60_Base: DevKit.WebApi.MoneyValue;
		/** ReadOnly - For system use only. */
		Aging90: DevKit.WebApi.MoneyValue;
		/** ReadOnly - The base currency equivalent of the aging 90 field. */
		Aging90_Base: DevKit.WebApi.MoneyValue;
		/** Select the legal designation or other business type of the account for contracts or reporting purposes. */
		BusinessTypeCode: DevKit.WebApi.OptionSetValue;
		/** ReadOnly - Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows the external party who created the record. */
		CreatedByExternalParty: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValue;
		/** Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. */
		CreditLimit: DevKit.WebApi.MoneyValue;
		/** ReadOnly - Shows the credit limit converted to the system's default base currency for reporting purposes. */
		CreditLimit_Base: DevKit.WebApi.MoneyValue;
		/** Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer. */
		CreditOnHold: DevKit.WebApi.BooleanValue;
		/** Select the size category or range of the account for segmentation and reporting purposes. */
		CustomerSizeCode: DevKit.WebApi.OptionSetValue;
		/** Select the category that best describes the relationship between the account and your organization. */
		CustomerTypeCode: DevKit.WebApi.OptionSetValue;
		/** Type additional information to describe the account, such as an excerpt from the company's website. */
		Description: DevKit.WebApi.StringValue;
		/** Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email. */
		DoNotBulkEMail: DevKit.WebApi.BooleanValue;
		/** Select whether the account allows bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but will be excluded from the postal mail. */
		DoNotBulkPostalMail: DevKit.WebApi.BooleanValue;
		/** Select whether the account allows direct email sent from Microsoft Dynamics 365. */
		DoNotEMail: DevKit.WebApi.BooleanValue;
		/** Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns. */
		DoNotFax: DevKit.WebApi.BooleanValue;
		/** Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns. */
		DoNotPhone: DevKit.WebApi.BooleanValue;
		/** Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns. */
		DoNotPostalMail: DevKit.WebApi.BooleanValue;
		/** Select whether the account accepts marketing materials, such as brochures or catalogs. */
		DoNotSendMM: DevKit.WebApi.BooleanValue;
		/** Type the primary email address for the account. */
		EMailAddress1: DevKit.WebApi.StringValue;
		/** Type the secondary email address for the account. */
		EMailAddress2: DevKit.WebApi.StringValue;
		/** Type an alternate email address for the account. */
		EMailAddress3: DevKit.WebApi.StringValue;
		/** Shows the default image for the record. */
		EntityImage: DevKit.WebApi.StringValue;
		/** ReadOnly */
		EntityImage_Timestamp: DevKit.WebApi.BigIntValue;
		/** ReadOnly */
		EntityImage_URL: DevKit.WebApi.StringValue;
		/** ReadOnly - For internal use only. */
		EntityImageId: DevKit.WebApi.GuidValue;
		/** ReadOnly - Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValue;
		/** Type the fax number for the account. */
		Fax: DevKit.WebApi.StringValue;
		/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account. */
		FollowEmail: DevKit.WebApi.BooleanValue;
		/** Type the URL for the account's FTP site to enable users to access data and share documents. */
		FtpSiteURL: DevKit.WebApi.StringValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Select the account's primary industry for use in marketing segmentation and demographic analysis. */
		IndustryCode: DevKit.WebApi.OptionSetValue;
		/** ReadOnly */
		IsPrivate: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the date when the account was last included in a marketing campaign or quick campaign. */
		LastUsedInCampaign_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type the market capitalization of the account to identify the company's equity, used as an indicator in financial performance analysis. */
		MarketCap: DevKit.WebApi.MoneyValue;
		/** ReadOnly - Shows the market capitalization converted to the system's default base currency. */
		MarketCap_Base: DevKit.WebApi.MoneyValue;
		/** Whether is only for marketing */
		MarketingOnly: DevKit.WebApi.BooleanValue;
		/** ReadOnly */
		MasterAccountIdName: DevKit.WebApi.StringValue;
		/** ReadOnly - Shows the master account that the account was merged with. */
		MasterId: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows whether the account has been merged with another account. */
		Merged: DevKit.WebApi.BooleanValue;
		/** ReadOnly - Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows the external party who modified the record. */
		ModifiedByExternalParty: DevKit.WebApi.LookupValue;
		/** ReadOnly - Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** ReadOnly - Shows who created the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValue;
		/** Type the company or business name. */
		Name: DevKit.WebApi.StringValue;
		/** Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. */
		NumberOfEmployees: DevKit.WebApi.IntegerValue;
		/** ReadOnly - Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Select the account's ownership structure, such as public or private. */
		OwnershipCode: DevKit.WebApi.OptionSetValue;
		/** ReadOnly - Shows the business unit that the record owner belongs to. */
		OwningBusinessUnit: DevKit.WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the team who owns the account. */
		OwningTeam: DevKit.WebApi.LookupValue;
		/** ReadOnly - Unique identifier of the user who owns the account. */
		OwningUser: DevKit.WebApi.LookupValue;
		/** Choose the parent account associated with this account to show parent and child businesses in reporting and analytics. */
		ParentAccountId: DevKit.WebApi.LookupValue;
		/** For system use only. Legacy Microsoft Dynamics CRM 3.0 workflow data. */
		ParticipatesInWorkflow: DevKit.WebApi.BooleanValue;
		/** Select the payment terms to indicate when the customer needs to pay the total amount. */
		PaymentTermsCode: DevKit.WebApi.OptionSetValue;
		/** Select the preferred day of the week for service appointments. */
		PreferredAppointmentDayCode: DevKit.WebApi.OptionSetValue;
		/** Select the preferred time of day for service appointments. */
		PreferredAppointmentTimeCode: DevKit.WebApi.OptionSetValue;
		/** Select the preferred method of contact. */
		PreferredContactMethodCode: DevKit.WebApi.OptionSetValue;
		/** Choose the preferred service representative for reference when you schedule service activities for the account. */
		PreferredSystemUserId: DevKit.WebApi.LookupValue;
		/** Choose the primary contact for the account to provide quick access to contact details. */
		PrimaryContactId: DevKit.WebApi.LookupValue;
		/** Primary Satori ID for Account */
		PrimarySatoriId: DevKit.WebApi.StringValue;
		/** Primary Twitter ID for Account */
		PrimaryTwitterId: DevKit.WebApi.StringValue;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Type the annual revenue for the account, used as an indicator in financial performance analysis. */
		Revenue: DevKit.WebApi.MoneyValue;
		/** ReadOnly - Shows the annual revenue converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
		Revenue_Base: DevKit.WebApi.MoneyValue;
		/** Type the number of shares available to the public for the account. This number is used as an indicator in financial performance analysis. */
		SharesOutstanding: DevKit.WebApi.IntegerValue;
		/** Select a shipping method for deliveries sent to the account's address to designate the preferred carrier or other delivery option. */
		ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis. */
		SIC: DevKit.WebApi.StringValue;
		/** Choose the service level agreement (SLA) that you want to apply to the Account record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** ReadOnly - Last SLA that was applied to this case. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValue;
		/** ReadOnly */
		SLAName: DevKit.WebApi.StringValue;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the account is active or inactive. Inactive accounts are read-only and can't be edited unless they are reactivated. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the account's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type the stock exchange at which the account is listed to track their stock and financial performance of the company. */
		StockExchange: DevKit.WebApi.StringValue;
		/** Type the main phone number for this account. */
		Telephone1: DevKit.WebApi.StringValue;
		/** Type a second phone number for this account. */
		Telephone2: DevKit.WebApi.StringValue;
		/** Type a third phone number for this account. */
		Telephone3: DevKit.WebApi.StringValue;
		/** Select a region or territory for the account for use in segmentation and analysis. */
		TerritoryCode: DevKit.WebApi.OptionSetValue;
		/** Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money. */
		TickerSymbol: DevKit.WebApi.StringValue;
		/** ReadOnly - Total time spent for emails (read and write) and meetings by me in relation to account record. */
		TimeSpentByMeOnEmailAndMeetings: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** ReadOnly - Version number of the account. */
		VersionNumber: DevKit.WebApi.BigIntValue;
		/** Type the account's website URL to get quick details about the company profile. */
		WebSiteURL: DevKit.WebApi.StringValue;
		/** Type the phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications. */
		YomiName: DevKit.WebApi.StringValue;
	}
}
declare namespace OptionSet {
	namespace Account {
		enum AccountCategoryCode {
			/** 1 */
			Preferred_Customer,
			/** 2 */
			Standard
		}
		enum AccountClassificationCode {
			/** 1 */
			Default_Value
		}
		enum AccountRatingCode {
			/** 1 */
			Default_Value
		}
		enum Address1_AddressTypeCode {
			/** 1 */
			Bill_To,
			/** 2 */
			Ship_To,
			/** 3 */
			Primary,
			/** 4 */
			Other
		}
		enum Address1_FreightTermsCode {
			/** 1 */
			FOB,
			/** 2 */
			No_Charge
		}
		enum Address1_ShippingMethodCode {
			/** 1 */
			Airborne,
			/** 2 */
			DHL,
			/** 3 */
			FedEx,
			/** 4 */
			UPS,
			/** 5 */
			Postal_Mail,
			/** 6 */
			Full_Load,
			/** 7 */
			Will_Call
		}
		enum Address2_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address2_FreightTermsCode {
			/** 1 */
			Default_Value
		}
		enum Address2_ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum BusinessTypeCode {
			/** 1 */
			Default_Value
		}
		enum CustomerSizeCode {
			/** 1 */
			Default_Value
		}
		enum CustomerTypeCode {
			/** 1 */
			Competitor,
			/** 2 */
			Consultant,
			/** 3 */
			Customer,
			/** 4 */
			Investor,
			/** 5 */
			Partner,
			/** 6 */
			Influencer,
			/** 7 */
			Press,
			/** 8 */
			Prospect,
			/** 9 */
			Reseller,
			/** 10 */
			Supplier,
			/** 11 */
			Vendor,
			/** 12 */
			Other
		}
		enum IndustryCode {
			/** 1 */
			Accounting,
			/** 2 */
			Agriculture_and_Non_petrol_Natural_Resource_Extraction,
			/** 3 */
			Broadcasting_Printing_and_Publishing,
			/** 4 */
			Brokers,
			/** 5 */
			Building_Supply_Retail,
			/** 6 */
			Business_Services,
			/** 7 */
			Consulting,
			/** 8 */
			Consumer_Services,
			/** 9 */
			Design_Direction_and_Creative_Management,
			/** 10 */
			Distributors_Dispatchers_and_Processors,
			/** 11 */
			Doctors_Offices_and_Clinics,
			/** 12 */
			Durable_Manufacturing,
			/** 13 */
			Eating_and_Drinking_Places,
			/** 14 */
			Entertainment_Retail,
			/** 15 */
			Equipment_Rental_and_Leasing,
			/** 16 */
			Financial,
			/** 17 */
			Food_and_Tobacco_Processing,
			/** 18 */
			Inbound_Capital_Intensive_Processing,
			/** 19 */
			Inbound_Repair_and_Services,
			/** 20 */
			Insurance,
			/** 21 */
			Legal_Services,
			/** 22 */
			Non_Durable_Merchandise_Retail,
			/** 23 */
			Outbound_Consumer_Service,
			/** 24 */
			Petrochemical_Extraction_and_Distribution,
			/** 25 */
			Service_Retail,
			/** 26 */
			SIG_Affiliations,
			/** 27 */
			Social_Services,
			/** 28 */
			Special_Outbound_Trade_Contractors,
			/** 29 */
			Specialty_Realty,
			/** 30 */
			Transportation,
			/** 31 */
			Utility_Creation_and_Distribution,
			/** 32 */
			Vehicle_Retail,
			/** 33 */
			Wholesale
		}
		enum OwnershipCode {
			/** 1 */
			Public,
			/** 2 */
			Private,
			/** 3 */
			Subsidiary,
			/** 4 */
			Other
		}
		enum PaymentTermsCode {
			/** 1 */
			Net_30,
			/** 2 */
			_2_10_Net_30,
			/** 3 */
			Net_45,
			/** 4 */
			Net_60
		}
		enum PreferredAppointmentDayCode {
			/** 0 */
			Sunday,
			/** 1 */
			Monday,
			/** 2 */
			Tuesday,
			/** 3 */
			Wednesday,
			/** 4 */
			Thursday,
			/** 5 */
			Friday,
			/** 6 */
			Saturday
		}
		enum PreferredAppointmentTimeCode {
			/** 1 */
			Morning,
			/** 2 */
			Afternoon,
			/** 3 */
			Evening
		}
		enum PreferredContactMethodCode {
			/** 1 */
			Any,
			/** 2 */
			Email,
			/** 3 */
			Phone,
			/** 4 */
			Fax,
			/** 5 */
			Mail
		}
		enum ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum TerritoryCode {
			/** 1 */
			Default_Value
		}
	}
}
//{'JsForm':['Account'],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}