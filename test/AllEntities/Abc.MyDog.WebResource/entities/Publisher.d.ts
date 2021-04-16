//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormPublisher_Information {
		interface tab__70098AD5_4956_11DD_982E_00188B01DCE6_Sections {
			_70098AD6_4956_11DD_982E_00188B01DCE6: DevKit.Controls.Section;
			description: DevKit.Controls.Section;
			_EAF2EDB4_7C5E_DD11_940F_00155D8AC303: DevKit.Controls.Section;
		}
		interface tab__E1F7A9C9_A0E6_4C8B_ACBD_C6610FBD2343_Sections {
			_CBF04024_5749_444C_BC51_CFAF839688BF: DevKit.Controls.Section;
			_6FE75F79_0CA8_4DBE_8C7B_6E68C17DE013: DevKit.Controls.Section;
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
			IFRAME_SolutionsMarketplace: DevKit.Controls.IFrame;
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
			/** URL for the supporting website of this publisher. */
			SupportingWebsiteUrl: DevKit.Controls.String;
			/** The unique name of this publisher. */
			UniqueName: DevKit.Controls.String;
		}
	}
	class FormPublisher_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Publisher_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Publisher_Information */
		Body: MyDog.FormPublisher_Information.Body;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier for address 1. */
		Address1_AddressId: DevKit.WebApi.GuidValue;
		/** Type of address for address 1, such as billing, shipping, or primary address. */
		Address1_AddressTypeCode: DevKit.WebApi.OptionSetValue;
		/** City name for address 1. */
		Address1_City: DevKit.WebApi.StringValue;
		/** Country/region name for address 1. */
		Address1_Country: DevKit.WebApi.StringValue;
		/** County name for address 1. */
		Address1_County: DevKit.WebApi.StringValue;
		/** Fax number for address 1. */
		Address1_Fax: DevKit.WebApi.StringValue;
		/** Latitude for address 1. */
		Address1_Latitude: DevKit.WebApi.DoubleValue;
		/** First line for entering address 1 information. */
		Address1_Line1: DevKit.WebApi.StringValue;
		/** Second line for entering address 1 information. */
		Address1_Line2: DevKit.WebApi.StringValue;
		/** Third line for entering address 1 information. */
		Address1_Line3: DevKit.WebApi.StringValue;
		/** Longitude for address 1. */
		Address1_Longitude: DevKit.WebApi.DoubleValue;
		/** Name to enter for address 1. */
		Address1_Name: DevKit.WebApi.StringValue;
		/** ZIP Code or postal code for address 1. */
		Address1_PostalCode: DevKit.WebApi.StringValue;
		/** Post office box number for address 1. */
		Address1_PostOfficeBox: DevKit.WebApi.StringValue;
		/** Method of shipment for address 1. */
		Address1_ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** State or province for address 1. */
		Address1_StateOrProvince: DevKit.WebApi.StringValue;
		/** First telephone number associated with address 1. */
		Address1_Telephone1: DevKit.WebApi.StringValue;
		/** Second telephone number associated with address 1. */
		Address1_Telephone2: DevKit.WebApi.StringValue;
		/** Third telephone number associated with address 1. */
		Address1_Telephone3: DevKit.WebApi.StringValue;
		/** United Parcel Service (UPS) zone for address 1. */
		Address1_UPSZone: DevKit.WebApi.StringValue;
		/** UTC offset for address 1. This is the difference between local time and standard Coordinated Universal Time. */
		Address1_UTCOffset: DevKit.WebApi.IntegerValue;
		/** Unique identifier for address 2. */
		Address2_AddressId: DevKit.WebApi.GuidValue;
		/** Type of address for address 2. such as billing, shipping, or primary address. */
		Address2_AddressTypeCode: DevKit.WebApi.OptionSetValue;
		/** City name for address 2. */
		Address2_City: DevKit.WebApi.StringValue;
		/** Country/region name for address 2. */
		Address2_Country: DevKit.WebApi.StringValue;
		/** County name for address 2. */
		Address2_County: DevKit.WebApi.StringValue;
		/** Fax number for address 2. */
		Address2_Fax: DevKit.WebApi.StringValue;
		/** Latitude for address 2. */
		Address2_Latitude: DevKit.WebApi.DoubleValue;
		/** First line for entering address 2 information. */
		Address2_Line1: DevKit.WebApi.StringValue;
		/** Second line for entering address 2 information. */
		Address2_Line2: DevKit.WebApi.StringValue;
		/** Third line for entering address 2 information. */
		Address2_Line3: DevKit.WebApi.StringValue;
		/** Longitude for address 2. */
		Address2_Longitude: DevKit.WebApi.DoubleValue;
		/** Name to enter for address 2. */
		Address2_Name: DevKit.WebApi.StringValue;
		/** ZIP Code or postal code for address 2. */
		Address2_PostalCode: DevKit.WebApi.StringValue;
		/** Post office box number for address 2. */
		Address2_PostOfficeBox: DevKit.WebApi.StringValue;
		/** Method of shipment for address 2. */
		Address2_ShippingMethodCode: DevKit.WebApi.OptionSetValue;
		/** State or province for address 2. */
		Address2_StateOrProvince: DevKit.WebApi.StringValue;
		/** First telephone number associated with address 2. */
		Address2_Telephone1: DevKit.WebApi.StringValue;
		/** Second telephone number associated with address 2. */
		Address2_Telephone2: DevKit.WebApi.StringValue;
		/** Third telephone number associated with address 2. */
		Address2_Telephone3: DevKit.WebApi.StringValue;
		/** United Parcel Service (UPS) zone for address 2. */
		Address2_UPSZone: DevKit.WebApi.StringValue;
		/** UTC offset for address 2. This is the difference between local time and standard Coordinated Universal Time. */
		Address2_UTCOffset: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who created the publisher. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the publisher was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the publisher. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Default option value prefix used for newly created options for solutions associated with this publisher. */
		CustomizationOptionValuePrefix: DevKit.WebApi.IntegerValue;
		/** Prefix used for new entities, attributes, and entity relationships for solutions associated with this publisher. */
		CustomizationPrefix: DevKit.WebApi.StringValue;
		/** Description of the solution. */
		Description: DevKit.WebApi.StringValue;
		/** Email address for the publisher. */
		EMailAddress: DevKit.WebApi.StringValue;
		/** Shows the default image for the record. */
		EntityImage: DevKit.WebApi.StringValue;
		EntityImage_Timestamp: DevKit.WebApi.BigIntValueReadonly;
		EntityImage_URL: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		EntityImageId: DevKit.WebApi.GuidValueReadonly;
		/** User display name for this publisher. */
		FriendlyName: DevKit.WebApi.StringValue;
		/** Indicates whether the publisher was created as part of a managed solution installation. */
		IsReadonly: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the publisher. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the publisher was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the publisher. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the organization associated with the publisher. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Default locale of the publisher in Microsoft Pinpoint. */
		PinpointPublisherDefaultLocale: DevKit.WebApi.StringValueReadonly;
		/** Identifier of the publisher in Microsoft Pinpoint. */
		PinpointPublisherId: DevKit.WebApi.BigIntValueReadonly;
		/** Unique identifier of the publisher. */
		PublisherId: DevKit.WebApi.GuidValue;
		/** URL for the supporting website of this publisher. */
		SupportingWebsiteUrl: DevKit.WebApi.StringValue;
		/** The unique name of this publisher. */
		UniqueName: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}