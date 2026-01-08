/**
 * aaduser.webapi.ts - aaduser WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for aaduser
 * All fields return string representation of their values
 */
export interface IaaduserFormattedValue {
	readonly aaduserId: string;
	readonly AccountEnabled: string;
	readonly BusinessPhones: string;
	readonly City: string;
	readonly CompanyName: string;
	readonly CreatedDateTime_UtcDateAndTime: string;
	readonly DisplayName: string;
	readonly GivenName: string;
	readonly id: string;
	readonly ImAddresses: string;
	readonly JobTitle: string;
	readonly Mail: string;
	readonly MobilePhone: string;
	readonly OfficeLocation: string;
	readonly PostalCode: string;
	readonly PreferredLanguage: string;
	readonly StreetAddress: string;
	readonly surname: string;
	readonly UserPrincipalName: string;
	readonly UserType: string;
}

/**
 * aaduser WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IaaduserApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IaaduserFormattedValue;
	/** Unique identifier of a Microsoft Entra ID. */
	aaduserId: DevKit.Guid | null;
	/** Indicates if the Account of an Microsoft Entra ID is enabled. */
	AccountEnabled: boolean | null;
	/** Business phone number for the user */
	BusinessPhones: string | null;
	/** City. */
	City: string | null;
	/** Company Name. */
	CompanyName: string | null;
	/** Date and time when the Microsoft Entra ID was created. */
	readonly CreatedDateTime_UtcDateAndTime: Date | null;
	/** The name displayed in the address book for the user. */
	DisplayName: string | null;
	/** The given name (first name) of the user. */
	GivenName: string | null;
	/** A unique identifer for Microsoft Entra ID */
	id: DevKit.Guid | null;
	/** ImAddresses for the user */
	ImAddresses: string | null;
	/** The user's job title. */
	JobTitle: string | null;
	/** The SMTP address for the user. */
	Mail: string | null;
	/** The primary cellular telephone number for the user. */
	MobilePhone: string | null;
	/** The office location in the user's place of business. */
	OfficeLocation: string | null;
	/** Postal Code. */
	PostalCode: string | null;
	/** The preferred language for the user. Should follow ISO 639-1 Code; for example 'en-US'. */
	PreferredLanguage: string | null;
	/** Street Address. */
	StreetAddress: string | null;
	/** The user's surname (family name or last name). */
	surname: string | null;
	/** The user principal name (UPN) of the user. */
	UserPrincipalName: string | null;
	/** User Type. */
	UserType: string | null;
}

const aaduserFieldConfig: DevKit.IWebApiFieldConfigMap = {
	aaduserId: { logicalName: 'aaduserid' },
	AccountEnabled: { logicalName: 'accountenabled', type: 'Boolean' },
	BusinessPhones: { logicalName: 'businessphones' },
	City: { logicalName: 'city' },
	CompanyName: { logicalName: 'companyname' },
	CreatedDateTime_UtcDateAndTime: { logicalName: 'createddatetime', readOnly: true, type: 'DateTime' },
	DisplayName: { logicalName: 'displayname' },
	GivenName: { logicalName: 'givenname' },
	id: { logicalName: 'id' },
	ImAddresses: { logicalName: 'imaddresses' },
	JobTitle: { logicalName: 'jobtitle' },
	Mail: { logicalName: 'mail' },
	MobilePhone: { logicalName: 'mobilephone' },
	OfficeLocation: { logicalName: 'officelocation' },
	PostalCode: { logicalName: 'postalcode' },
	PreferredLanguage: { logicalName: 'preferredlanguage' },
	StreetAddress: { logicalName: 'streetaddress' },
	surname: { logicalName: 'surname' },
	UserPrincipalName: { logicalName: 'userprincipalname' },
	UserType: { logicalName: 'usertype' },
};

/**
 * aaduser WebApi class for early-bound style coding
 * Usage: const aaduser = new aaduserApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class aaduserApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IaaduserApi>(entity, 'aaduser', 'aadusers', aaduserFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface aaduserApi extends IaaduserApi { }
