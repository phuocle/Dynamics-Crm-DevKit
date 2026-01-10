//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_weblink_Information {
		interface tab__FB562B86_E39C_490E_B7B2_D7C53D363325_Sections {
			/** General */
			_5D983152_5327_4492_B286_B7446CF20F0D: DevKit.Controls.Section;
			/** Image Properties */
			_A5DB4708_AB02_DE11_BDF3_0003FF48C0DB: DevKit.Controls.Section;
			/** Link Options */
			_FB562B86_E39C_490E_B7B2_D7C53D363325_SECTION_3: DevKit.Controls.Section;
			/** Description (HTML) */
			mspp_weblink_description_monacoEditor: DevKit.Controls.Section;
		}
		/** General */
		interface tab__FB562B86_E39C_490E_B7B2_D7C53D363325 extends DevKit.Controls.ITab {
			Section: tab__FB562B86_E39C_490E_B7B2_D7C53D363325_Sections;
		}
		interface Tabs {
			/** General */
			_FB562B86_E39C_490E_B7B2_D7C53D363325: tab__FB562B86_E39C_490E_B7B2_D7C53D363325;
		}
		interface Body {
			Tab: Tabs;
			/** Description */
			mspp_description: DevKit.Controls.String;
			/** Description */
			mspp_description1: DevKit.Controls.String;
			/** Disable Page Validation */
			mspp_disablepagevalidation: DevKit.Controls.Boolean;
			/** Display Image Only */
			mspp_displayimageonly: DevKit.Controls.Boolean;
			/** Display Order */
			mspp_displayorder: DevKit.Controls.Integer;
			/** Select whether to display the children of the page as child links for this link. */
			mspp_displaypagechildlinks: DevKit.Controls.Boolean;
			/** External Url */
			mspp_externalurl: DevKit.Controls.String;
			/** Image Alt Text */
			mspp_imagealttext: DevKit.Controls.String;
			/** Image Height */
			mspp_imageheight: DevKit.Controls.Integer;
			/** Image Url */
			mspp_imageurl: DevKit.Controls.String;
			/** Image Width */
			mspp_imagewidth: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			/** Open In New Window */
			mspp_openinnewwindow: DevKit.Controls.Boolean;
			/** Unique identifier for Web Page associated with Web Link. */
			mspp_pageid: DevKit.Controls.Lookup;
			/** Unique identifier for parent Web Link associated with Web Link. */
			mspp_parentweblinkid: DevKit.Controls.Lookup;
			/** Unique identifier for Publishing State associated with Web Link. */
			mspp_publishingstateid: DevKit.Controls.Lookup;
			/** Robots Follow Link */
			mspp_robotsfollowlink: DevKit.Controls.Boolean;
			/** Unique identifier for Web Link Set associated with Web Link. */
			mspp_weblinksetid: DevKit.Controls.Lookup;
		}
	}
	export class Formmspp_weblink_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form mspp_weblink_Information */
		Body: DevKit.Formmspp_weblink_Information.Body;
	}
	export class mspp_weblinkApi {
		/**
		* DynamicsCrm.DevKit mspp_weblinkApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Shows who created the record. */
		mspp_createdby: string | null;
		mspp_createdbyipaddress: string | null;
		mspp_createdbyusername: string | null;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date | null;
		mspp_description: string | null;
		mspp_disablepagevalidation: boolean | null;
		mspp_displayimageonly: boolean | null;
		mspp_displayorder: number | null;
		/** Select whether to display the children of the page as child links for this link. */
		mspp_displaypagechildlinks: boolean | null;
		mspp_externalurl: string | null;
		mspp_imagealttext: string | null;
		mspp_imageheight: number | null;
		mspp_imageurl: string | null;
		mspp_imagewidth: number | null;
		/** Shows who last updated the record. */
		mspp_modifiedby: string | null;
		mspp_modifiedbyipaddress: string | null;
		mspp_modifiedbyusername: string | null;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date | null;
		/** The name of the custom entity. */
		mspp_name: string | null;
		mspp_openinnewwindow: boolean | null;
		/** Unique identifier for Web Page associated with Web Link. */
		mspp_pageid: string | null;
		/** Unique identifier for parent Web Link associated with Web Link. */
		mspp_parentweblinkid: string | null;
		/** Unique identifier for Publishing State associated with Web Link. */
		mspp_publishingstateid: string | null;
		mspp_robotsfollowlink: boolean | null;
		/** Unique identifier for entity instances */
		mspp_weblinkId: string | null;
		/** Unique identifier for Web Link Set associated with Web Link. */
		mspp_weblinksetid: string | null;
		/** Status of the Web Link */
		statecode: OptionSet.mspp_weblink.statecode | null;
		/** Reason for the status of the Web Link */
		statuscode: OptionSet.mspp_weblink.statuscode | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			readonly mspp_createdbyipaddress: string;
			readonly mspp_createdbyusername: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			readonly mspp_description: string;
			readonly mspp_disablepagevalidation: string;
			readonly mspp_displayimageonly: string;
			readonly mspp_displayorder: string;
			/** Select whether to display the children of the page as child links for this link. */
			readonly mspp_displaypagechildlinks: string;
			readonly mspp_externalurl: string;
			readonly mspp_imagealttext: string;
			readonly mspp_imageheight: string;
			readonly mspp_imageurl: string;
			readonly mspp_imagewidth: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			readonly mspp_modifiedbyipaddress: string;
			readonly mspp_modifiedbyusername: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly mspp_name: string;
			readonly mspp_openinnewwindow: string;
			/** Unique identifier for Web Page associated with Web Link. */
			readonly mspp_pageid: string;
			/** Unique identifier for parent Web Link associated with Web Link. */
			readonly mspp_parentweblinkid: string;
			/** Unique identifier for Publishing State associated with Web Link. */
			readonly mspp_publishingstateid: string;
			readonly mspp_robotsfollowlink: string;
			/** Unique identifier for entity instances */
			readonly mspp_weblinkId: string;
			/** Unique identifier for Web Link Set associated with Web Link. */
			readonly mspp_weblinksetid: string;
			/** Status of the Web Link */
			readonly statecode: string;
			/** Reason for the status of the Web Link */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_weblink {
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}