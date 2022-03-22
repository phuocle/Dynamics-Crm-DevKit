//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormPublisher_Information {
		interface tab__70098AD5_4956_11DD_982E_00188B01DCE6_Sections {
			_70098AD6_4956_11DD_982E_00188B01DCE6: DevKit.Controls.Section;
			_EAF2EDB4_7C5E_DD11_940F_00155D8AC303: DevKit.Controls.Section;
			description: DevKit.Controls.Section;
		}
		interface tab__E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343_Sections {
			_6FE75F79_0CA8_4DBE_8C7B_6E68C17DE013: DevKit.Controls.Section;
			_CBF04024_5749_444C_BC51_CFAF839688BF: DevKit.Controls.Section;
		}
		interface tab_solutions_marketplace_Sections {
			marketplacesection: DevKit.Controls.Section;
		}
		interface tab__70098AD5_4956_11DD_982E_00188B01DCE6 extends DevKit.Controls.ITab {
			Section: tab__70098AD5_4956_11DD_982E_00188B01DCE6_Sections;
		}
		interface tab__E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343 extends DevKit.Controls.ITab {
			Section: tab__E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343_Sections;
		}
		interface tab_solutions_marketplace extends DevKit.Controls.ITab {
			Section: tab_solutions_marketplace_Sections;
		}
		interface Tabs {
			_70098AD5_4956_11DD_982E_00188B01DCE6: tab__70098AD5_4956_11DD_982E_00188B01DCE6;
			_E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343: tab__E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343;
			solutions_marketplace: tab_solutions_marketplace;
		}
		interface Body {
			Tab: Tabs;
			/** City name for address 1. */
			Address1_City: DevKit.Controls.String;
			/** Country/region name for address 1. */
			Address1_Country: DevKit.Controls.String;
			/** First line for entering address 1 information. */
			Address1_Line1: DevKit.Controls.String;
			/** Second line for entering address 1 information. */
			Address1_Line2: DevKit.Controls.String;
			/** ZIP Code or postal code for address 1. */
			Address1_PostalCode: DevKit.Controls.String;
			/** State or province for address 1. */
			Address1_StateOrProvince: DevKit.Controls.String;
			/** First telephone number associated with address 1. */
			Address1_Telephone1: DevKit.Controls.String;
			/** Default option value prefix used for newly created options for solutions associated with this publisher. */
			CustomizationOptionValuePrefix: DevKit.Controls.Integer;
			/** Prefix used for new entities, attributes, and entity relationships for solutions associated with this publisher. */
			CustomizationPrefix: DevKit.Controls.String;
			/** Description of the solution. */
			Description: DevKit.Controls.String;
			/** Email address for the publisher. */
			EMailAddress: DevKit.Controls.String;
			/** User display name for this publisher. */
			FriendlyName: DevKit.Controls.String;
			IFRAME_SolutionsMarketplace: DevKit.Controls.IFrame;
			/** URL for the supporting website of this publisher. */
			SupportingWebsiteUrl: DevKit.Controls.String;
			/** The unique name of this publisher. */
			UniqueName: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormPublisher_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Publisher_Information */
		Body: DevKit.FormPublisher_Information.Body;
		/** The Process of form Publisher_Information */
		Process: DevKit.FormPublisher_Information.Process;
		/** The SidePanes of form Publisher_Information */
		SidePanes: DevKit.SidePanes;
	}
	class PublisherApi {
		/**
		* DynamicsCrm.DevKit PublisherApi
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
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier for address 1. */
		Address1_AddressId: string;
		/** Type of address for address 1, such as billing, shipping, or primary address. */
		Address1_AddressTypeCode: OptionSet.Publisher.Address1_AddressTypeCode;
		/** City name for address 1. */
		Address1_City: string;
		/** Country/region name for address 1. */
		Address1_Country: string;
		/** County name for address 1. */
		Address1_County: string;
		/** Fax number for address 1. */
		Address1_Fax: string;
		/** Latitude for address 1. */
		Address1_Latitude: number;
		/** First line for entering address 1 information. */
		Address1_Line1: string;
		/** Second line for entering address 1 information. */
		Address1_Line2: string;
		/** Third line for entering address 1 information. */
		Address1_Line3: string;
		/** Longitude for address 1. */
		Address1_Longitude: number;
		/** Name to enter for address 1. */
		Address1_Name: string;
		/** ZIP Code or postal code for address 1. */
		Address1_PostalCode: string;
		/** Post office box number for address 1. */
		Address1_PostOfficeBox: string;
		/** Method of shipment for address 1. */
		Address1_ShippingMethodCode: OptionSet.Publisher.Address1_ShippingMethodCode;
		/** State or province for address 1. */
		Address1_StateOrProvince: string;
		/** First telephone number associated with address 1. */
		Address1_Telephone1: string;
		/** Second telephone number associated with address 1. */
		Address1_Telephone2: string;
		/** Third telephone number associated with address 1. */
		Address1_Telephone3: string;
		/** United Parcel Service (UPS) zone for address 1. */
		Address1_UPSZone: string;
		/** UTC offset for address 1. This is the difference between local time and standard Coordinated Universal Time. */
		Address1_UTCOffset: number;
		/** Unique identifier for address 2. */
		Address2_AddressId: string;
		/** Type of address for address 2. such as billing, shipping, or primary address. */
		Address2_AddressTypeCode: OptionSet.Publisher.Address2_AddressTypeCode;
		/** City name for address 2. */
		Address2_City: string;
		/** Country/region name for address 2. */
		Address2_Country: string;
		/** County name for address 2. */
		Address2_County: string;
		/** Fax number for address 2. */
		Address2_Fax: string;
		/** Latitude for address 2. */
		Address2_Latitude: number;
		/** First line for entering address 2 information. */
		Address2_Line1: string;
		/** Second line for entering address 2 information. */
		Address2_Line2: string;
		/** Third line for entering address 2 information. */
		Address2_Line3: string;
		/** Longitude for address 2. */
		Address2_Longitude: number;
		/** Name to enter for address 2. */
		Address2_Name: string;
		/** ZIP Code or postal code for address 2. */
		Address2_PostalCode: string;
		/** Post office box number for address 2. */
		Address2_PostOfficeBox: string;
		/** Method of shipment for address 2. */
		Address2_ShippingMethodCode: OptionSet.Publisher.Address2_ShippingMethodCode;
		/** State or province for address 2. */
		Address2_StateOrProvince: string;
		/** First telephone number associated with address 2. */
		Address2_Telephone1: string;
		/** Second telephone number associated with address 2. */
		Address2_Telephone2: string;
		/** Third telephone number associated with address 2. */
		Address2_Telephone3: string;
		/** United Parcel Service (UPS) zone for address 2. */
		Address2_UPSZone: string;
		/** UTC offset for address 2. This is the difference between local time and standard Coordinated Universal Time. */
		Address2_UTCOffset: number;
		/** Unique identifier of the user who created the publisher. */
		readonly CreatedBy: string;
		/** Date and time when the publisher was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the publisher. */
		readonly CreatedOnBehalfBy: string;
		/** Default option value prefix used for newly created options for solutions associated with this publisher. */
		CustomizationOptionValuePrefix: number;
		/** Prefix used for new entities, attributes, and entity relationships for solutions associated with this publisher. */
		CustomizationPrefix: string;
		/** Description of the solution. */
		Description: string;
		/** Email address for the publisher. */
		EMailAddress: string;
		/** Shows the default image for the record. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** For internal use only. */
		readonly EntityImageId: string;
		/** User display name for this publisher. */
		FriendlyName: string;
		/** Indicates whether the publisher was created as part of a managed solution installation. */
		readonly IsReadonly: boolean;
		/** Unique identifier of the user who last modified the publisher. */
		readonly ModifiedBy: string;
		/** Date and time when the publisher was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the publisher. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier of the organization associated with the publisher. */
		readonly OrganizationId: string;
		/** Default locale of the publisher in Microsoft Pinpoint. */
		readonly PinpointPublisherDefaultLocale: string;
		/** Identifier of the publisher in Microsoft Pinpoint. */
		readonly PinpointPublisherId: number;
		/** Unique identifier of the publisher. */
		PublisherId: string;
		/** URL for the supporting website of this publisher. */
		SupportingWebsiteUrl: string;
		/** The unique name of this publisher. */
		UniqueName: string;
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace Publisher {
		enum Address1_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address1_ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum Address2_AddressTypeCode {
			/** 1 */
			Default_Value
		}
		enum Address2_ShippingMethodCode {
			/** 1 */
			Default_Value
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}