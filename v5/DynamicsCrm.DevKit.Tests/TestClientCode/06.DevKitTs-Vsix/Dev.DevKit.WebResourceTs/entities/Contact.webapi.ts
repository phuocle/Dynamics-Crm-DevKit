/**
 * Contact.webapi.ts - Contact WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for Contact
 * All fields return string representation of their values
 */
export interface IContactFormattedValue {
	readonly AccountId: string;
	readonly AccountRoleCode: string;
	readonly Address1_AddressId: string;
	readonly Address1_AddressTypeCode: string;
	readonly Address1_City: string;
	readonly Address1_Composite: string;
	readonly Address1_Country: string;
	readonly Address1_County: string;
	readonly Address1_Fax: string;
	readonly Address1_FreightTermsCode: string;
	readonly Address1_Latitude: string;
	readonly Address1_Line1: string;
	readonly Address1_Line2: string;
	readonly Address1_Line3: string;
	readonly Address1_Longitude: string;
	readonly Address1_Name: string;
	readonly Address1_PostalCode: string;
	readonly Address1_PostOfficeBox: string;
	readonly Address1_PrimaryContactName: string;
	readonly Address1_ShippingMethodCode: string;
	readonly Address1_StateOrProvince: string;
	readonly Address1_Telephone1: string;
	readonly Address1_Telephone2: string;
	readonly Address1_Telephone3: string;
	readonly Address1_UPSZone: string;
	readonly Address1_UTCOffset: string;
	readonly Address2_AddressId: string;
	readonly Address2_AddressTypeCode: string;
	readonly Address2_City: string;
	readonly Address2_Composite: string;
	readonly Address2_Country: string;
	readonly Address2_County: string;
	readonly Address2_Fax: string;
	readonly Address2_FreightTermsCode: string;
	readonly Address2_Latitude: string;
	readonly Address2_Line1: string;
	readonly Address2_Line2: string;
	readonly Address2_Line3: string;
	readonly Address2_Longitude: string;
	readonly Address2_Name: string;
	readonly Address2_PostalCode: string;
	readonly Address2_PostOfficeBox: string;
	readonly Address2_PrimaryContactName: string;
	readonly Address2_ShippingMethodCode: string;
	readonly Address2_StateOrProvince: string;
	readonly Address2_Telephone1: string;
	readonly Address2_Telephone2: string;
	readonly Address2_Telephone3: string;
	readonly Address2_UPSZone: string;
	readonly Address2_UTCOffset: string;
	readonly Address3_AddressId: string;
	readonly Address3_AddressTypeCode: string;
	readonly Address3_City: string;
	readonly Address3_Composite: string;
	readonly Address3_Country: string;
	readonly Address3_County: string;
	readonly Address3_Fax: string;
	readonly Address3_FreightTermsCode: string;
	readonly Address3_Latitude: string;
	readonly Address3_Line1: string;
	readonly Address3_Line2: string;
	readonly Address3_Line3: string;
	readonly Address3_Longitude: string;
	readonly Address3_Name: string;
	readonly Address3_PostalCode: string;
	readonly Address3_PostOfficeBox: string;
	readonly Address3_PrimaryContactName: string;
	readonly Address3_ShippingMethodCode: string;
	readonly Address3_StateOrProvince: string;
	readonly Address3_Telephone1: string;
	readonly Address3_Telephone2: string;
	readonly Address3_Telephone3: string;
	readonly Address3_UPSZone: string;
	readonly Address3_UTCOffset: string;
	readonly adx_ConfirmRemovePassword: string;
	readonly Adx_CreatedByIPAddress: string;
	readonly Adx_CreatedByUsername: string;
	readonly adx_identity_accessfailedcount: string;
	readonly adx_identity_emailaddress1confirmed: string;
	readonly adx_identity_lastsuccessfullogin_UtcDateAndTime: string;
	readonly adx_identity_locallogindisabled: string;
	readonly adx_identity_lockoutenabled: string;
	readonly adx_identity_lockoutenddate_UtcDateAndTime: string;
	readonly adx_identity_logonenabled: string;
	readonly adx_identity_mobilephoneconfirmed: string;
	readonly adx_identity_newpassword: string;
	readonly adx_identity_passwordhash: string;
	readonly adx_identity_securitystamp: string;
	readonly adx_identity_twofactorenabled: string;
	readonly adx_identity_username: string;
	readonly Adx_ModifiedByIPAddress: string;
	readonly Adx_ModifiedByUsername: string;
	readonly Adx_OrganizationName: string;
	readonly adx_preferredlcid: string;
	readonly adx_profilealert: string;
	readonly adx_profilealertdate_UtcDateAndTime: string;
	readonly adx_profilealertinstructions: string;
	readonly Adx_ProfileIsAnonymous: string;
	readonly Adx_ProfileLastActivity_UtcDateAndTime: string;
	readonly adx_profilemodifiedon_UtcDateAndTime: string;
	readonly adx_PublicProfileCopy: string;
	readonly Adx_TimeZone: string;
	readonly Aging30: string;
	readonly Aging30_Base: string;
	readonly Aging60: string;
	readonly Aging60_Base: string;
	readonly Aging90: string;
	readonly Aging90_Base: string;
	readonly Anniversary_DateOnly: string;
	readonly AnnualIncome: string;
	readonly AnnualIncome_Base: string;
	readonly AssistantName: string;
	readonly AssistantPhone: string;
	readonly BirthDate_DateOnly: string;
	readonly Business2: string;
	readonly Callback: string;
	readonly ChildrensNames: string;
	readonly Company: string;
	readonly ContactId: string;
	readonly CreatedBy: string;
	readonly CreatedByExternalParty: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CreditLimit: string;
	readonly CreditLimit_Base: string;
	readonly CreditOnHold: string;
	readonly CustomerSizeCode: string;
	readonly CustomerTypeCode: string;
	readonly Department: string;
	readonly Description: string;
	readonly DoNotBulkEMail: string;
	readonly DoNotBulkPostalMail: string;
	readonly DoNotEMail: string;
	readonly DoNotFax: string;
	readonly DoNotPhone: string;
	readonly DoNotPostalMail: string;
	readonly DoNotSendMM: string;
	readonly EducationCode: string;
	readonly EMailAddress1: string;
	readonly EMailAddress2: string;
	readonly EMailAddress3: string;
	readonly EmployeeId: string;
	readonly EntityImage: string;
	readonly EntityImageId: string;
	readonly ExchangeRate: string;
	readonly ExternalUserIdentifier: string;
	readonly FamilyStatusCode: string;
	readonly Fax: string;
	readonly FirstName: string;
	readonly FollowEmail: string;
	readonly FtpSiteUrl: string;
	readonly FullName: string;
	readonly GenderCode: string;
	readonly GovernmentId: string;
	readonly HasChildrenCode: string;
	readonly Home2: string;
	readonly ImportSequenceNumber: string;
	readonly IsAutoCreate: string;
	readonly IsBackofficeCustomer: string;
	readonly IsPrivate: string;
	readonly JobTitle: string;
	readonly LastName: string;
	readonly LastOnHoldTime_UtcDateAndTime: string;
	readonly LastUsedInCampaign_UtcDateOnly: string;
	readonly LeadSourceCode: string;
	readonly ManagerName: string;
	readonly ManagerPhone: string;
	readonly MarketingOnly: string;
	readonly MasterId: string;
	readonly Merged: string;
	readonly MiddleName: string;
	readonly MobilePhone: string;
	readonly ModifiedBy: string;
	readonly ModifiedByExternalParty: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly msa_managingpartnerid: string;
	readonly msdyn_disablewebtracking: string;
	readonly msdyn_isminor: string;
	readonly msdyn_isminorwithparentalconsent: string;
	readonly msdyn_portaltermsagreementdate_UtcDateAndTime: string;
	readonly mspp_userpreferredlcid: string;
	readonly NickName: string;
	readonly NumberOfChildren: string;
	readonly OnHoldTime: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly Pager: string;
	readonly ParentContactId: string;
	readonly ParentCustomerId: string;
	readonly ParticipatesInWorkflow: string;
	readonly PaymentTermsCode: string;
	readonly PreferredAppointmentDayCode: string;
	readonly PreferredAppointmentTimeCode: string;
	readonly PreferredContactMethodCode: string;
	readonly PreferredSystemUserId: string;
	readonly ProcessId: string;
	readonly Salutation: string;
	readonly ShippingMethodCode: string;
	readonly SLAId: string;
	readonly SLAInvokedId: string;
	readonly SpousesName: string;
	readonly StageId: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly SubscriptionId: string;
	readonly Suffix: string;
	readonly Telephone1: string;
	readonly Telephone2: string;
	readonly Telephone3: string;
	readonly TerritoryCode: string;
	readonly TimeSpentByMeOnEmailAndMeetings: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly TransactionCurrencyId: string;
	readonly TraversedPath: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
	readonly WebSiteUrl: string;
	readonly YomiFirstName: string;
	readonly YomiFullName: string;
	readonly YomiLastName: string;
	readonly YomiMiddleName: string;
}

/**
 * Contact WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IContactApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IContactFormattedValue;
	/** Unique identifier of the account with which the contact is associated. */
	readonly AccountId: DevKit.Guid | null;
	/** Select the contact's role within the company or sales process, such as decision maker, employee, or influencer. */
	AccountRoleCode: number | null;
	/** Unique identifier for address 1. */
	Address1_AddressId: DevKit.Guid | null;
	/** Select the primary address type. */
	Address1_AddressTypeCode: number | null;
	/** Type the city for the primary address. */
	Address1_City: string | null;
	/** Shows the complete primary address. */
	readonly Address1_Composite: string | null;
	/** Type the country or region for the primary address. */
	Address1_Country: string | null;
	/** Type the county for the primary address. */
	Address1_County: string | null;
	/** Type the fax number associated with the primary address. */
	Address1_Fax: string | null;
	/** Select the freight terms for the primary address to make sure shipping orders are processed correctly. */
	Address1_FreightTermsCode: number | null;
	/** Type the latitude value for the primary address for use in mapping and other applications. */
	Address1_Latitude: number | null;
	/** Type the first line of the primary address. */
	Address1_Line1: string | null;
	/** Type the second line of the primary address. */
	Address1_Line2: string | null;
	/** Type the third line of the primary address. */
	Address1_Line3: string | null;
	/** Type the longitude value for the primary address for use in mapping and other applications. */
	Address1_Longitude: number | null;
	/** Type a descriptive name for the primary address, such as Corporate Headquarters. */
	Address1_Name: string | null;
	/** Type the ZIP Code or postal code for the primary address. */
	Address1_PostalCode: string | null;
	/** Type the post office box number of the primary address. */
	Address1_PostOfficeBox: string | null;
	/** Type the name of the main contact at the account's primary address. */
	Address1_PrimaryContactName: string | null;
	/** Select a shipping method for deliveries sent to this address. */
	Address1_ShippingMethodCode: number | null;
	/** Type the state or province of the primary address. */
	Address1_StateOrProvince: string | null;
	/** Type the main phone number associated with the primary address. */
	Address1_Telephone1: string | null;
	/** Type a second phone number associated with the primary address. */
	Address1_Telephone2: string | null;
	/** Type a third phone number associated with the primary address. */
	Address1_Telephone3: string | null;
	/** Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
	Address1_UPSZone: string | null;
	/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
	Address1_UTCOffset: number | null;
	/** Unique identifier for address 2. */
	Address2_AddressId: DevKit.Guid | null;
	/** Select the secondary address type. */
	Address2_AddressTypeCode: number | null;
	/** Type the city for the secondary address. */
	Address2_City: string | null;
	/** Shows the complete secondary address. */
	readonly Address2_Composite: string | null;
	/** Type the country or region for the secondary address. */
	Address2_Country: string | null;
	/** Type the county for the secondary address. */
	Address2_County: string | null;
	/** Type the fax number associated with the secondary address. */
	Address2_Fax: string | null;
	/** Select the freight terms for the secondary address to make sure shipping orders are processed correctly. */
	Address2_FreightTermsCode: number | null;
	/** Type the latitude value for the secondary address for use in mapping and other applications. */
	Address2_Latitude: number | null;
	/** Type the first line of the secondary address. */
	Address2_Line1: string | null;
	/** Type the second line of the secondary address. */
	Address2_Line2: string | null;
	/** Type the third line of the secondary address. */
	Address2_Line3: string | null;
	/** Type the longitude value for the secondary address for use in mapping and other applications. */
	Address2_Longitude: number | null;
	/** Type a descriptive name for the secondary address, such as Corporate Headquarters. */
	Address2_Name: string | null;
	/** Type the ZIP Code or postal code for the secondary address. */
	Address2_PostalCode: string | null;
	/** Type the post office box number of the secondary address. */
	Address2_PostOfficeBox: string | null;
	/** Type the name of the main contact at the account's secondary address. */
	Address2_PrimaryContactName: string | null;
	/** Select a shipping method for deliveries sent to this address. */
	Address2_ShippingMethodCode: number | null;
	/** Type the state or province of the secondary address. */
	Address2_StateOrProvince: string | null;
	/** Type the main phone number associated with the secondary address. */
	Address2_Telephone1: string | null;
	/** Type a second phone number associated with the secondary address. */
	Address2_Telephone2: string | null;
	/** Type a third phone number associated with the secondary address. */
	Address2_Telephone3: string | null;
	/** Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
	Address2_UPSZone: string | null;
	/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
	Address2_UTCOffset: number | null;
	/** Unique identifier for address 3. */
	Address3_AddressId: DevKit.Guid | null;
	/** Select the third address type. */
	Address3_AddressTypeCode: number | null;
	/** Type the city for the 3rd address. */
	Address3_City: string | null;
	/** Shows the complete third address. */
	readonly Address3_Composite: string | null;
	/** the country or region for the 3rd address. */
	Address3_Country: string | null;
	/** Type the county for the third address. */
	Address3_County: string | null;
	/** Type the fax number associated with the third address. */
	Address3_Fax: string | null;
	/** Select the freight terms for the third address to make sure shipping orders are processed correctly. */
	Address3_FreightTermsCode: number | null;
	/** Type the latitude value for the third address for use in mapping and other applications. */
	Address3_Latitude: number | null;
	/** the first line of the 3rd address. */
	Address3_Line1: string | null;
	/** the second line of the 3rd address. */
	Address3_Line2: string | null;
	/** the third line of the 3rd address. */
	Address3_Line3: string | null;
	/** Type the longitude value for the third address for use in mapping and other applications. */
	Address3_Longitude: number | null;
	/** Type a descriptive name for the third address, such as Corporate Headquarters. */
	Address3_Name: string | null;
	/** the ZIP Code or postal code for the 3rd address. */
	Address3_PostalCode: string | null;
	/** the post office box number of the 3rd address. */
	Address3_PostOfficeBox: string | null;
	/** Type the name of the main contact at the account's third address. */
	Address3_PrimaryContactName: string | null;
	/** Select a shipping method for deliveries sent to this address. */
	Address3_ShippingMethodCode: number | null;
	/** the state or province of the third address. */
	Address3_StateOrProvince: string | null;
	/** Type the main phone number associated with the third address. */
	Address3_Telephone1: string | null;
	/** Type a second phone number associated with the third address. */
	Address3_Telephone2: string | null;
	/** Type a third phone number associated with the primary address. */
	Address3_Telephone3: string | null;
	/** Type the UPS zone of the third address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS. */
	Address3_UPSZone: string | null;
	/** Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address. */
	Address3_UTCOffset: number | null;
	/** Confirm Remove Password */
	adx_ConfirmRemovePassword: boolean | null;
	/** Created By IP Address */
	Adx_CreatedByIPAddress: string | null;
	/** Created By Username */
	Adx_CreatedByUsername: string | null;
	/** Shows the current count of failed password attempts for the contact. */
	adx_identity_accessfailedcount: number | null;
	/** Determines if the email is confirmed by the contact. */
	adx_identity_emailaddress1confirmed: boolean | null;
	/** Indicates the last date and time the user successfully signed in to a portal. */
	adx_identity_lastsuccessfullogin_UtcDateAndTime: Date | null;
	/** Indicates that the contact can no longer sign in to the portal using the local account. */
	adx_identity_locallogindisabled: boolean | null;
	/** Determines if this contact will track failed access attempts and become locked after too many failed attempts. To prevent the contact from becoming locked, you can disable this setting. */
	adx_identity_lockoutenabled: boolean | null;
	/** Shows the moment in time when the locked contact becomes unlocked again. */
	adx_identity_lockoutenddate_UtcDateAndTime: Date | null;
	/** Determines if web authentication is enabled for the contact. */
	adx_identity_logonenabled: boolean | null;
	/** Determines if the phone number is confirmed by the contact. */
	adx_identity_mobilephoneconfirmed: boolean | null;
	/** New Password Input */
	adx_identity_newpassword: string | null;
	/** Password Hash */
	adx_identity_passwordhash: string | null;
	/** A token used to manage the web authentication session. */
	adx_identity_securitystamp: string | null;
	/** Determines if two-factor authentication is enabled for the contact. */
	adx_identity_twofactorenabled: boolean | null;
	/** Shows the user identity for local web authentication. */
	adx_identity_username: string | null;
	/** Modified By IP Address */
	Adx_ModifiedByIPAddress: string | null;
	/** Modified By Username */
	Adx_ModifiedByUsername: string | null;
	/** Organization Name */
	Adx_OrganizationName: string | null;
	/** User’s preferred portal LCID */
	adx_preferredlcid: number | null;
	/** Profile Alert */
	adx_profilealert: boolean | null;
	/** Profile Alert Date */
	adx_profilealertdate_UtcDateAndTime: Date | null;
	/** Profile Alert Instructions */
	adx_profilealertinstructions: string | null;
	/** Profile Is Anonymous */
	Adx_ProfileIsAnonymous: boolean | null;
	/** Profile Last Activity */
	Adx_ProfileLastActivity_UtcDateAndTime: Date | null;
	/** Profile Modified On */
	adx_profilemodifiedon_UtcDateAndTime: Date | null;
	/** Public Profile Copy */
	adx_PublicProfileCopy: string | null;
	/** Time Zone */
	Adx_TimeZone: number | null;
	/** For system use only. */
	readonly Aging30: number | null;
	/** Shows the Aging 30 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
	readonly Aging30_Base: number | null;
	/** For system use only. */
	readonly Aging60: number | null;
	/** Shows the Aging 60 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
	readonly Aging60_Base: number | null;
	/** For system use only. */
	readonly Aging90: number | null;
	/** Shows the Aging 90 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
	readonly Aging90_Base: number | null;
	/** Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications. */
	Anniversary_DateOnly: Date | null;
	/** Type the contact's annual income for use in profiling and financial analysis. */
	AnnualIncome: number | null;
	/** Shows the Annual Income field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. */
	readonly AnnualIncome_Base: number | null;
	/** Type the name of the contact's assistant. */
	AssistantName: string | null;
	/** Type the phone number for the contact's assistant. */
	AssistantPhone: string | null;
	/** Enter the contact's birthday for use in customer gift programs or other communications. */
	BirthDate_DateOnly: Date | null;
	/** Type a second business phone number for this contact. */
	Business2: string | null;
	/** Type a callback phone number for this contact. */
	Callback: string | null;
	/** Type the names of the contact's children for reference in communications and client programs. */
	ChildrensNames: string | null;
	/** Type the company phone of the contact. */
	Company: string | null;
	/** Unique identifier of the contact. */
	ContactId: DevKit.Guid | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the external party who created the record. */
	readonly CreatedByExternalParty: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type the credit limit of the contact for reference when you address invoice and accounting issues with the customer. */
	CreditLimit: number | null;
	/** Shows the Credit Limit field converted to the system's default base currency for reporting purposes. The calculations use the exchange rate specified in the Currencies area. */
	readonly CreditLimit_Base: number | null;
	/** Select whether the contact is on a credit hold, for reference when addressing invoice and accounting issues. */
	CreditOnHold: boolean | null;
	/** Select the size of the contact's company for segmentation and reporting purposes. */
	CustomerSizeCode: number | null;
	/** Select the category that best describes the relationship between the contact and your organization. */
	CustomerTypeCode: number | null;
	/** Type the department or business unit where the contact works in the parent company or business. */
	Department: string | null;
	/** Type additional information to describe the contact, such as an excerpt from the company's website. */
	Description: string | null;
	/** Select whether the contact accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the email. */
	DoNotBulkEMail: boolean | null;
	/** Select whether the contact accepts bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the letters. */
	DoNotBulkPostalMail: boolean | null;
	/** Select whether the contact allows direct email sent from Microsoft Dynamics 365. If Do Not Allow is selected, Microsoft Dynamics 365 will not send the email. */
	DoNotEMail: boolean | null;
	/** Select whether the contact allows faxes. If Do Not Allow is selected, the contact will be excluded from any fax activities distributed in marketing campaigns. */
	DoNotFax: boolean | null;
	/** Select whether the contact accepts phone calls. If Do Not Allow is selected, the contact will be excluded from any phone call activities distributed in marketing campaigns. */
	DoNotPhone: boolean | null;
	/** Select whether the contact allows direct mail. If Do Not Allow is selected, the contact will be excluded from letter activities distributed in marketing campaigns. */
	DoNotPostalMail: boolean | null;
	/** Select whether the contact accepts marketing materials, such as brochures or catalogs. Contacts that opt out can be excluded from marketing initiatives. */
	DoNotSendMM: boolean | null;
	/** Select the contact's highest level of education for use in segmentation and analysis. */
	EducationCode: number | null;
	/** Type the primary email address for the contact. */
	EMailAddress1: string | null;
	/** Type the secondary email address for the contact. */
	EMailAddress2: string | null;
	/** Type an alternate email address for the contact. */
	EMailAddress3: string | null;
	/** Type the employee ID or number for the contact for reference in orders, service cases, or other communications with the contact's organization. */
	EmployeeId: string | null;
	/** Shows the default image for the record. */
	EntityImage: string | null;
	/** For internal use only. */
	readonly EntityImageId: DevKit.Guid | null;
	/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
	readonly ExchangeRate: number | null;
	/** Identifier for an external user. */
	ExternalUserIdentifier: string | null;
	/** Select the marital status of the contact for reference in follow-up phone calls and other communications. */
	FamilyStatusCode: number | null;
	/** Type the fax number for the contact. */
	Fax: string | null;
	/** Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
	FirstName: string | null;
	/** Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the contact. */
	FollowEmail: boolean | null;
	/** Type the URL for the contact's FTP site to enable users to access data and share documents. */
	FtpSiteUrl: string | null;
	/** Combines and shows the contact's first and last names so that the full name can be displayed in views and reports. */
	readonly FullName: string | null;
	/** Select the contact's gender to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
	GenderCode: number | null;
	/** Type the passport number or other government ID for the contact for use in documents or reports. */
	GovernmentId: string | null;
	/** Select whether the contact has any children for reference in follow-up phone calls and other communications. */
	HasChildrenCode: number | null;
	/** Type a second home phone number for this contact. */
	Home2: string | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Information about whether the contact was auto-created when promoting an email or an appointment. */
	readonly IsAutoCreate: boolean | null;
	/** Select whether the contact exists in a separate accounting or other system, such as Microsoft Dynamics GP or another ERP database, for use in integration processes. */
	IsBackofficeCustomer: boolean | null;
	readonly IsPrivate: boolean | null;
	/** Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
	JobTitle: string | null;
	/** Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
	LastName: string | null;
	/** Contains the date and time stamp of the last on hold time. */
	LastOnHoldTime_UtcDateAndTime: Date | null;
	/** Shows the date when the contact was last included in a marketing campaign or quick campaign. */
	LastUsedInCampaign_UtcDateOnly: Date | null;
	/** Select the primary marketing source that directed the contact to your organization. */
	LeadSourceCode: number | null;
	/** Type the name of the contact's manager for use in escalating issues or other follow-up communications with the contact. */
	ManagerName: string | null;
	/** Type the phone number for the contact's manager. */
	ManagerPhone: string | null;
	/** Whether is only for marketing */
	MarketingOnly: boolean | null;
	/** Unique identifier of the master contact for merge. */
	readonly MasterId: DevKit.Guid | null;
	/** Shows whether the account has been merged with a master contact. */
	readonly Merged: boolean | null;
	/** Type the contact's middle name or initial to make sure the contact is addressed correctly. */
	MiddleName: string | null;
	/** Type the mobile phone number for the contact. */
	MobilePhone: string | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the external party who modified the record. */
	readonly ModifiedByExternalParty: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for Account associated with Contact. */
	msa_managingpartnerid: DevKit.Guid | null;
	/** Indicates that the contact has opted out of web tracking. */
	msdyn_disablewebtracking: boolean | null;
	/** Indicates that the contact is considered a minor in their jurisdiction. */
	msdyn_isminor: boolean | null;
	/** Indicates that the contact is considered a minor in their jurisdiction and has parental consent. */
	msdyn_isminorwithparentalconsent: boolean | null;
	/** Indicates the date and time that the person agreed to the portal terms and conditions. */
	msdyn_portaltermsagreementdate_UtcDateAndTime: Date | null;
	/** User’s preferred portal language */
	mspp_userpreferredlcid: number | null;
	/** Type the contact's nickname. */
	NickName: string | null;
	/** Type the number of children the contact has for reference in follow-up phone calls and other communications. */
	NumberOfChildren: number | null;
	/** Shows how long, in minutes, that the record was on hold. */
	readonly OnHoldTime: number | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the contact. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the contact. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the contact. */
	readonly OwningUser: DevKit.Guid | null;
	/** Type the pager number for the contact. */
	Pager: string | null;
	/** Unique identifier of the parent contact. */
	readonly ParentContactId: DevKit.Guid | null;
	/** Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities. */
	ParentCustomerId: DevKit.Guid | null;
	/** Shows whether the contact participates in workflow rules. */
	ParticipatesInWorkflow: boolean | null;
	/** Select the payment terms to indicate when the customer needs to pay the total amount. */
	PaymentTermsCode: number | null;
	/** Select the preferred day of the week for service appointments. */
	PreferredAppointmentDayCode: number | null;
	/** Select the preferred time of day for service appointments. */
	PreferredAppointmentTimeCode: number | null;
	/** Select the preferred method of contact. */
	PreferredContactMethodCode: number | null;
	/** Choose the regular or preferred customer service representative for reference when scheduling service activities for the contact. */
	PreferredSystemUserId: DevKit.Guid | null;
	/** Shows the ID of the process. */
	ProcessId: DevKit.Guid | null;
	/** Type the salutation of the contact to make sure the contact is addressed correctly in sales calls, email messages, and marketing campaigns. */
	Salutation: string | null;
	/** Select a shipping method for deliveries sent to this address. */
	ShippingMethodCode: number | null;
	/** Choose the service level agreement (SLA) that you want to apply to the Contact record. */
	SLAId: DevKit.Guid | null;
	/** Last SLA that was applied to this case. This field is for internal use only. */
	readonly SLAInvokedId: DevKit.Guid | null;
	/** Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact. */
	SpousesName: string | null;
	/** Shows the ID of the stage. */
	StageId: DevKit.Guid | null;
	/** Shows whether the contact is active or inactive. Inactive contacts are read-only and can't be edited unless they are reactivated. */
	StateCode: number | null;
	/** Select the contact's status. */
	StatusCode: number | null;
	/** For internal use only. */
	SubscriptionId: DevKit.Guid | null;
	/** Type the suffix used in the contact's name, such as Jr. or Sr. to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns. */
	Suffix: string | null;
	/** Type the main phone number for this contact. */
	Telephone1: string | null;
	/** Type a second phone number for this contact. */
	Telephone2: string | null;
	/** Type a third phone number for this contact. */
	Telephone3: string | null;
	/** Select a region or territory for the contact for use in segmentation and analysis. */
	TerritoryCode: number | null;
	/** Total time spent for emails (read and write) and meetings by me in relation to the contact record. */
	readonly TimeSpentByMeOnEmailAndMeetings: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** For internal use only. */
	TraversedPath: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of the contact. */
	readonly VersionNumber: number | null;
	/** Type the contact's professional or personal website or blog URL. */
	WebSiteUrl: string | null;
	/** Type the phonetic spelling of the contact's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
	YomiFirstName: string | null;
	/** Shows the combined Yomi first and last names of the contact so that the full phonetic name can be displayed in views and reports. */
	readonly YomiFullName: string | null;
	/** Type the phonetic spelling of the contact's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
	YomiLastName: string | null;
	/** Type the phonetic spelling of the contact's middle name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact. */
	YomiMiddleName: string | null;
}

const ContactFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AccountId: { schemaName: 'AccountId', logicalName: '_accountid_value', readOnly: true, entityCollectionName: 'accounts', entityLogicalName: 'account' },
	AccountRoleCode: { logicalName: 'accountrolecode', type: 'Integer' },
	Address1_AddressId: { logicalName: 'address1_addressid' },
	Address1_AddressTypeCode: { logicalName: 'address1_addresstypecode', type: 'Integer' },
	Address1_City: { logicalName: 'address1_city' },
	Address1_Composite: { logicalName: 'address1_composite', readOnly: true },
	Address1_Country: { logicalName: 'address1_country' },
	Address1_County: { logicalName: 'address1_county' },
	Address1_Fax: { logicalName: 'address1_fax' },
	Address1_FreightTermsCode: { logicalName: 'address1_freighttermscode', type: 'Integer' },
	Address1_Latitude: { logicalName: 'address1_latitude', type: 'Number' },
	Address1_Line1: { logicalName: 'address1_line1' },
	Address1_Line2: { logicalName: 'address1_line2' },
	Address1_Line3: { logicalName: 'address1_line3' },
	Address1_Longitude: { logicalName: 'address1_longitude', type: 'Number' },
	Address1_Name: { logicalName: 'address1_name' },
	Address1_PostalCode: { logicalName: 'address1_postalcode' },
	Address1_PostOfficeBox: { logicalName: 'address1_postofficebox' },
	Address1_PrimaryContactName: { logicalName: 'address1_primarycontactname' },
	Address1_ShippingMethodCode: { logicalName: 'address1_shippingmethodcode', type: 'Integer' },
	Address1_StateOrProvince: { logicalName: 'address1_stateorprovince' },
	Address1_Telephone1: { logicalName: 'address1_telephone1' },
	Address1_Telephone2: { logicalName: 'address1_telephone2' },
	Address1_Telephone3: { logicalName: 'address1_telephone3' },
	Address1_UPSZone: { logicalName: 'address1_upszone' },
	Address1_UTCOffset: { logicalName: 'address1_utcoffset', type: 'Integer' },
	Address2_AddressId: { logicalName: 'address2_addressid' },
	Address2_AddressTypeCode: { logicalName: 'address2_addresstypecode', type: 'Integer' },
	Address2_City: { logicalName: 'address2_city' },
	Address2_Composite: { logicalName: 'address2_composite', readOnly: true },
	Address2_Country: { logicalName: 'address2_country' },
	Address2_County: { logicalName: 'address2_county' },
	Address2_Fax: { logicalName: 'address2_fax' },
	Address2_FreightTermsCode: { logicalName: 'address2_freighttermscode', type: 'Integer' },
	Address2_Latitude: { logicalName: 'address2_latitude', type: 'Number' },
	Address2_Line1: { logicalName: 'address2_line1' },
	Address2_Line2: { logicalName: 'address2_line2' },
	Address2_Line3: { logicalName: 'address2_line3' },
	Address2_Longitude: { logicalName: 'address2_longitude', type: 'Number' },
	Address2_Name: { logicalName: 'address2_name' },
	Address2_PostalCode: { logicalName: 'address2_postalcode' },
	Address2_PostOfficeBox: { logicalName: 'address2_postofficebox' },
	Address2_PrimaryContactName: { logicalName: 'address2_primarycontactname' },
	Address2_ShippingMethodCode: { logicalName: 'address2_shippingmethodcode', type: 'Integer' },
	Address2_StateOrProvince: { logicalName: 'address2_stateorprovince' },
	Address2_Telephone1: { logicalName: 'address2_telephone1' },
	Address2_Telephone2: { logicalName: 'address2_telephone2' },
	Address2_Telephone3: { logicalName: 'address2_telephone3' },
	Address2_UPSZone: { logicalName: 'address2_upszone' },
	Address2_UTCOffset: { logicalName: 'address2_utcoffset', type: 'Integer' },
	Address3_AddressId: { logicalName: 'address3_addressid' },
	Address3_AddressTypeCode: { logicalName: 'address3_addresstypecode', type: 'Integer' },
	Address3_City: { logicalName: 'address3_city' },
	Address3_Composite: { logicalName: 'address3_composite', readOnly: true },
	Address3_Country: { logicalName: 'address3_country' },
	Address3_County: { logicalName: 'address3_county' },
	Address3_Fax: { logicalName: 'address3_fax' },
	Address3_FreightTermsCode: { logicalName: 'address3_freighttermscode', type: 'Integer' },
	Address3_Latitude: { logicalName: 'address3_latitude', type: 'Number' },
	Address3_Line1: { logicalName: 'address3_line1' },
	Address3_Line2: { logicalName: 'address3_line2' },
	Address3_Line3: { logicalName: 'address3_line3' },
	Address3_Longitude: { logicalName: 'address3_longitude', type: 'Number' },
	Address3_Name: { logicalName: 'address3_name' },
	Address3_PostalCode: { logicalName: 'address3_postalcode' },
	Address3_PostOfficeBox: { logicalName: 'address3_postofficebox' },
	Address3_PrimaryContactName: { logicalName: 'address3_primarycontactname' },
	Address3_ShippingMethodCode: { logicalName: 'address3_shippingmethodcode', type: 'Integer' },
	Address3_StateOrProvince: { logicalName: 'address3_stateorprovince' },
	Address3_Telephone1: { logicalName: 'address3_telephone1' },
	Address3_Telephone2: { logicalName: 'address3_telephone2' },
	Address3_Telephone3: { logicalName: 'address3_telephone3' },
	Address3_UPSZone: { logicalName: 'address3_upszone' },
	Address3_UTCOffset: { logicalName: 'address3_utcoffset', type: 'Integer' },
	adx_ConfirmRemovePassword: { logicalName: 'adx_confirmremovepassword', type: 'Boolean' },
	Adx_CreatedByIPAddress: { logicalName: 'adx_createdbyipaddress' },
	Adx_CreatedByUsername: { logicalName: 'adx_createdbyusername' },
	adx_identity_accessfailedcount: { logicalName: 'adx_identity_accessfailedcount', type: 'Integer' },
	adx_identity_emailaddress1confirmed: { logicalName: 'adx_identity_emailaddress1confirmed', type: 'Boolean' },
	adx_identity_lastsuccessfullogin_UtcDateAndTime: { logicalName: 'adx_identity_lastsuccessfullogin', type: 'DateTime' },
	adx_identity_locallogindisabled: { logicalName: 'adx_identity_locallogindisabled', type: 'Boolean' },
	adx_identity_lockoutenabled: { logicalName: 'adx_identity_lockoutenabled', type: 'Boolean' },
	adx_identity_lockoutenddate_UtcDateAndTime: { logicalName: 'adx_identity_lockoutenddate', type: 'DateTime' },
	adx_identity_logonenabled: { logicalName: 'adx_identity_logonenabled', type: 'Boolean' },
	adx_identity_mobilephoneconfirmed: { logicalName: 'adx_identity_mobilephoneconfirmed', type: 'Boolean' },
	adx_identity_newpassword: { logicalName: 'adx_identity_newpassword' },
	adx_identity_passwordhash: { logicalName: 'adx_identity_passwordhash' },
	adx_identity_securitystamp: { logicalName: 'adx_identity_securitystamp' },
	adx_identity_twofactorenabled: { logicalName: 'adx_identity_twofactorenabled', type: 'Boolean' },
	adx_identity_username: { logicalName: 'adx_identity_username' },
	Adx_ModifiedByIPAddress: { logicalName: 'adx_modifiedbyipaddress' },
	Adx_ModifiedByUsername: { logicalName: 'adx_modifiedbyusername' },
	Adx_OrganizationName: { logicalName: 'adx_organizationname' },
	adx_preferredlcid: { logicalName: 'adx_preferredlcid', type: 'Integer' },
	adx_profilealert: { logicalName: 'adx_profilealert', type: 'Boolean' },
	adx_profilealertdate_UtcDateAndTime: { logicalName: 'adx_profilealertdate', type: 'DateTime' },
	adx_profilealertinstructions: { logicalName: 'adx_profilealertinstructions' },
	Adx_ProfileIsAnonymous: { logicalName: 'adx_profileisanonymous', type: 'Boolean' },
	Adx_ProfileLastActivity_UtcDateAndTime: { logicalName: 'adx_profilelastactivity', type: 'DateTime' },
	adx_profilemodifiedon_UtcDateAndTime: { logicalName: 'adx_profilemodifiedon', type: 'DateTime' },
	adx_PublicProfileCopy: { logicalName: 'adx_publicprofilecopy' },
	Adx_TimeZone: { logicalName: 'adx_timezone', type: 'Integer' },
	Aging30: { logicalName: 'aging30', readOnly: true, type: 'Number' },
	Aging30_Base: { logicalName: 'aging30_base', readOnly: true, type: 'Number' },
	Aging60: { logicalName: 'aging60', readOnly: true, type: 'Number' },
	Aging60_Base: { logicalName: 'aging60_base', readOnly: true, type: 'Number' },
	Aging90: { logicalName: 'aging90', readOnly: true, type: 'Number' },
	Aging90_Base: { logicalName: 'aging90_base', readOnly: true, type: 'Number' },
	Anniversary_DateOnly: { logicalName: 'anniversary', type: 'DateTime' },
	AnnualIncome: { logicalName: 'annualincome', type: 'Number' },
	AnnualIncome_Base: { logicalName: 'annualincome_base', readOnly: true, type: 'Number' },
	AssistantName: { logicalName: 'assistantname' },
	AssistantPhone: { logicalName: 'assistantphone' },
	BirthDate_DateOnly: { logicalName: 'birthdate', type: 'DateTime' },
	Business2: { logicalName: 'business2' },
	Callback: { logicalName: 'callback' },
	ChildrensNames: { logicalName: 'childrensnames' },
	Company: { logicalName: 'company' },
	ContactId: { logicalName: 'contactid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedByExternalParty: { schemaName: 'CreatedByExternalParty', logicalName: '_createdbyexternalparty_value', readOnly: true, entityCollectionName: 'externalparties', entityLogicalName: 'externalparty' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreditLimit: { logicalName: 'creditlimit', type: 'Number' },
	CreditLimit_Base: { logicalName: 'creditlimit_base', readOnly: true, type: 'Number' },
	CreditOnHold: { logicalName: 'creditonhold', type: 'Boolean' },
	CustomerSizeCode: { logicalName: 'customersizecode', type: 'Integer' },
	CustomerTypeCode: { logicalName: 'customertypecode', type: 'Integer' },
	Department: { logicalName: 'department' },
	Description: { logicalName: 'description' },
	DoNotBulkEMail: { logicalName: 'donotbulkemail', type: 'Boolean' },
	DoNotBulkPostalMail: { logicalName: 'donotbulkpostalmail', type: 'Boolean' },
	DoNotEMail: { logicalName: 'donotemail', type: 'Boolean' },
	DoNotFax: { logicalName: 'donotfax', type: 'Boolean' },
	DoNotPhone: { logicalName: 'donotphone', type: 'Boolean' },
	DoNotPostalMail: { logicalName: 'donotpostalmail', type: 'Boolean' },
	DoNotSendMM: { logicalName: 'donotsendmm', type: 'Boolean' },
	EducationCode: { logicalName: 'educationcode', type: 'Integer' },
	EMailAddress1: { logicalName: 'emailaddress1' },
	EMailAddress2: { logicalName: 'emailaddress2' },
	EMailAddress3: { logicalName: 'emailaddress3' },
	EmployeeId: { logicalName: 'employeeid' },
	EntityImage: { logicalName: 'entityimage' },
	EntityImageId: { logicalName: 'entityimageid', readOnly: true },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ExternalUserIdentifier: { logicalName: 'externaluseridentifier' },
	FamilyStatusCode: { logicalName: 'familystatuscode', type: 'Integer' },
	Fax: { logicalName: 'fax' },
	FirstName: { logicalName: 'firstname' },
	FollowEmail: { logicalName: 'followemail', type: 'Boolean' },
	FtpSiteUrl: { logicalName: 'ftpsiteurl' },
	FullName: { logicalName: 'fullname', readOnly: true },
	GenderCode: { logicalName: 'gendercode', type: 'Integer' },
	GovernmentId: { logicalName: 'governmentid' },
	HasChildrenCode: { logicalName: 'haschildrencode', type: 'Integer' },
	Home2: { logicalName: 'home2' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsAutoCreate: { logicalName: 'isautocreate', readOnly: true, type: 'Boolean' },
	IsBackofficeCustomer: { logicalName: 'isbackofficecustomer', type: 'Boolean' },
	IsPrivate: { logicalName: 'isprivate', readOnly: true, type: 'Boolean' },
	JobTitle: { logicalName: 'jobtitle' },
	LastName: { logicalName: 'lastname' },
	LastOnHoldTime_UtcDateAndTime: { logicalName: 'lastonholdtime', type: 'DateTime' },
	LastUsedInCampaign_UtcDateOnly: { logicalName: 'lastusedincampaign', type: 'DateTime' },
	LeadSourceCode: { logicalName: 'leadsourcecode', type: 'Integer' },
	ManagerName: { logicalName: 'managername' },
	ManagerPhone: { logicalName: 'managerphone' },
	MarketingOnly: { logicalName: 'marketingonly', type: 'Boolean' },
	MasterId: { schemaName: 'MasterId', logicalName: '_masterid_value', readOnly: true, entityCollectionName: 'contacts', entityLogicalName: 'contact' },
	Merged: { logicalName: 'merged', readOnly: true, type: 'Boolean' },
	MiddleName: { logicalName: 'middlename' },
	MobilePhone: { logicalName: 'mobilephone' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedByExternalParty: { schemaName: 'ModifiedByExternalParty', logicalName: '_modifiedbyexternalparty_value', readOnly: true, entityCollectionName: 'externalparties', entityLogicalName: 'externalparty' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msa_managingpartnerid: { schemaName: 'msa_managingpartnerid', logicalName: '_msa_managingpartnerid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	msdyn_disablewebtracking: { logicalName: 'msdyn_disablewebtracking', type: 'Boolean' },
	msdyn_isminor: { logicalName: 'msdyn_isminor', type: 'Boolean' },
	msdyn_isminorwithparentalconsent: { logicalName: 'msdyn_isminorwithparentalconsent', type: 'Boolean' },
	msdyn_portaltermsagreementdate_UtcDateAndTime: { logicalName: 'msdyn_portaltermsagreementdate', type: 'DateTime' },
	mspp_userpreferredlcid: { logicalName: 'mspp_userpreferredlcid', type: 'Integer' },
	NickName: { logicalName: 'nickname' },
	NumberOfChildren: { logicalName: 'numberofchildren', type: 'Integer' },
	OnHoldTime: { logicalName: 'onholdtime', readOnly: true, type: 'Integer' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Pager: { logicalName: 'pager' },
	ParentContactId: { schemaName: 'ParentContactId', logicalName: '_parentcontactid_value', readOnly: true, entityCollectionName: 'contacts', entityLogicalName: 'contact' },
	ParentCustomerId: { schemaName: 'ParentCustomerId', logicalName: '_parentcustomerid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	ParticipatesInWorkflow: { logicalName: 'participatesinworkflow', type: 'Boolean' },
	PaymentTermsCode: { logicalName: 'paymenttermscode', type: 'Integer' },
	PreferredAppointmentDayCode: { logicalName: 'preferredappointmentdaycode', type: 'Integer' },
	PreferredAppointmentTimeCode: { logicalName: 'preferredappointmenttimecode', type: 'Integer' },
	PreferredContactMethodCode: { logicalName: 'preferredcontactmethodcode', type: 'Integer' },
	PreferredSystemUserId: { schemaName: 'PreferredSystemUserId', logicalName: '_preferredsystemuserid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ProcessId: { logicalName: 'processid' },
	Salutation: { logicalName: 'salutation' },
	ShippingMethodCode: { logicalName: 'shippingmethodcode', type: 'Integer' },
	SLAId: { schemaName: 'SLAId', logicalName: '_slaid_value', entityCollectionName: 'slas', entityLogicalName: 'sla' },
	SLAInvokedId: { schemaName: 'SLAInvokedId', logicalName: '_slainvokedid_value', readOnly: true, entityCollectionName: 'slas', entityLogicalName: 'sla' },
	SpousesName: { logicalName: 'spousesname' },
	StageId: { logicalName: 'stageid' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SubscriptionId: { logicalName: 'subscriptionid' },
	Suffix: { logicalName: 'suffix' },
	Telephone1: { logicalName: 'telephone1' },
	Telephone2: { logicalName: 'telephone2' },
	Telephone3: { logicalName: 'telephone3' },
	TerritoryCode: { logicalName: 'territorycode', type: 'Integer' },
	TimeSpentByMeOnEmailAndMeetings: { logicalName: 'timespentbymeonemailandmeetings', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	TraversedPath: { logicalName: 'traversedpath' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WebSiteUrl: { logicalName: 'websiteurl' },
	YomiFirstName: { logicalName: 'yomifirstname' },
	YomiFullName: { logicalName: 'yomifullname', readOnly: true },
	YomiLastName: { logicalName: 'yomilastname' },
	YomiMiddleName: { logicalName: 'yomimiddlename' },
};

/**
 * Contact WebApi class for early-bound style coding
 * Usage: const contact = new ContactApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ContactApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IContactApi>(entity, 'contact', 'contacts', ContactFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ContactApi extends IContactApi { }
