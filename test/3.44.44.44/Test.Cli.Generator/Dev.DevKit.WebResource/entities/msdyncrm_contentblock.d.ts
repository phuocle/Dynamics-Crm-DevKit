//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormContent_Block_Properties {
		interface tab_details_tab_Sections {
			history_section: DevKit.Controls.Section;
			settings_section: DevKit.Controls.Section;
		}
		interface tab_details_tab extends DevKit.Controls.ITab {
			Section: tab_details_tab_Sections;
		}
		interface Tabs {
			details_tab: tab_details_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Indicates the person who created this. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			entityimage: DevKit.Controls.ELSE1???;//entityimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			/** Indicates the person who modified this. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyncrm_available_in: DevKit.Controls.MultiOptionSet;
			/** Content blocks are always protected in preview */
			msdyncrm_protected: DevKit.Controls.Boolean;
			/** Tags */
			msdyncrm_tags: DevKit.Controls.String;
			msdyncrm_thumbnailimage: DevKit.Controls.ELSE1???;//msdyncrm_thumbnailimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			/** Reason for the status of the content block */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {

		}
	}
	class FormContent_Block_Properties extends DevKit.IForm {
		/**
		* Content Block Properties [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Content_Block_Properties */
		Body: DevKit.FormContent_Block_Properties.Body;
		/** The Navigation of form Content_Block_Properties */
		Navigation: DevKit.FormContent_Block_Properties.Navigation;
		/** The SidePanes of form Content_Block_Properties */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormDesigner_V2 {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the content block */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface tab_general_tab_Sections {
			general_section: DevKit.Controls.Section;
		}
		interface tab_general_tab extends DevKit.Controls.ITab {
			Section: tab_general_tab_Sections;
		}
		interface Tabs {
			general_tab: tab_general_tab;
		}
		interface Body {
			Tab: Tabs;
			/** Indicates the person who created this. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			entityimage: DevKit.Controls.ELSE1???;//entityimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			/** Indicates the person who modified this. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyncrm_available_in: DevKit.Controls.MultiOptionSet;
			msdyncrm_designerhtml: DevKit.Controls.ActionCards;
			/** Compressed content-block body with in-lined CSS */
			msdyncrm_finalizedhtml: DevKit.Controls.String;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			/** Email body used only for preview display purposes */
			msdyncrm_previewhtml: DevKit.Controls.String;
			/** Content blocks are always protected in preview */
			msdyncrm_protected: DevKit.Controls.Boolean;
			/** Tags */
			msdyncrm_tags: DevKit.Controls.String;
			msdyncrm_thumbnailimage: DevKit.Controls.ELSE1???;//msdyncrm_thumbnailimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
		}
		interface Navigation {

		}
	}
	class FormDesigner_V2 extends DevKit.IForm {
		/**
		* Designer V2 [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Designer_V2 */
		Body: DevKit.FormDesigner_V2.Body;
		/** The Header section of form Designer_V2 */
		Header: DevKit.FormDesigner_V2.Header;
		/** The Navigation of form Designer_V2 */
		Navigation: DevKit.FormDesigner_V2.Navigation;
		/** The SidePanes of form Designer_V2 */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSave_as_block_properties {
		interface Header extends DevKit.Controls.IHeader {

		}
		interface tab_general_tab_Sections {
		}
		interface tab_general_tab extends DevKit.Controls.ITab {
			Section: tab_general_tab_Sections;
		}
		interface Tabs {
			general_tab: tab_general_tab;
		}
		interface Body {
			Tab: Tabs;
			entityimage: DevKit.Controls.ELSE1???;//entityimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			/** Content blocks are always protected in preview */
			msdyncrm_protected: DevKit.Controls.Boolean;
			msdyncrm_tags: DevKit.Controls.ActionCards;
			msdyncrm_thumbnailimage: DevKit.Controls.ELSE1???;//msdyncrm_thumbnailimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			/** Reason for the status of the content block */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {

		}
	}
	class FormSave_as_block_properties extends DevKit.IForm {
		/**
		* Save as block properties [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Save_as_block_properties */
		Body: DevKit.FormSave_as_block_properties.Body;
		/** The Header section of form Save_as_block_properties */
		Header: DevKit.FormSave_as_block_properties.Header;
		/** The Navigation of form Save_as_block_properties */
		Navigation: DevKit.FormSave_as_block_properties.Navigation;
		/** The SidePanes of form Save_as_block_properties */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_contentblockApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_contentblockApi
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
		/** Indicates the person who created this. */
		readonly CreatedBy: string;
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Indicates the person who created this for another person. */
		readonly CreatedOnBehalfBy: string;
		entityimage: string;
		entityimage_Timestamp: number;
		entityimage_URL: string;
		readonly entityimageId: string;
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Indicates the person who modified this. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Indicates the person who modified this for another person. */
		readonly ModifiedOnBehalfBy: string;
		msdyncrm_available_in: Array<OptionSet.msdyncrm_contentblock.msdyncrm_available_in>;
		/** Unique identifier for this entity */
		msdyncrm_contentblockId: string;
		/** Clean content-block body: HTML with no compression or on-line CSS */
		msdyncrm_designerhtml: string;
		/** Compressed content-block body with in-lined CSS */
		msdyncrm_finalizedhtml: string;
		/** The name of the custom entity */
		msdyncrm_name: string;
		/** Email body used only for preview display purposes */
		msdyncrm_previewhtml: string;
		/** Content blocks are always protected in preview */
		msdyncrm_protected: boolean;
		/** Tags */
		msdyncrm_tags: string;
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		msdyncrm_thumbnailimage: string;
		msdyncrm_thumbnailimage_Timestamp: number;
		msdyncrm_thumbnailimage_URL: string;
		readonly msdyncrm_thumbnailimageId: string;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Indicates the business unit that owns this. */
		readonly OwningBusinessUnit: string;
		/** Indicates the team that owns this. */
		readonly OwningTeam: string;
		/** Indicates the person who owns this. */
		readonly OwningUser: string;
		/** Status of the content block */
		statecode: OptionSet.msdyncrm_contentblock.statecode;
		/** Reason for the status of the content block */
		statuscode: OptionSet.msdyncrm_contentblock.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Indicates the person who created this. */
			readonly CreatedBy: string;
			/** Date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Indicates the person who created this for another person. */
			readonly CreatedOnBehalfBy: string;
			readonly entityimage: string;
			readonly entityimage_Timestamp: string;
			readonly entityimage_URL: string;
			readonly entityimageId: string;
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Indicates the person who modified this. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Indicates the person who modified this for another person. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyncrm_available_in: Array<string>;
			/** Unique identifier for this entity */
			readonly msdyncrm_contentblockId: string;
			/** Clean content-block body: HTML with no compression or on-line CSS */
			readonly msdyncrm_designerhtml: string;
			/** Compressed content-block body with in-lined CSS */
			readonly msdyncrm_finalizedhtml: string;
			/** The name of the custom entity */
			readonly msdyncrm_name: string;
			/** Email body used only for preview display purposes */
			readonly msdyncrm_previewhtml: string;
			/** Content blocks are always protected in preview */
			readonly msdyncrm_protected: string;
			/** Tags */
			readonly msdyncrm_tags: string;
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly msdyncrm_thumbnailimage: string;
			readonly msdyncrm_thumbnailimage_Timestamp: string;
			readonly msdyncrm_thumbnailimage_URL: string;
			readonly msdyncrm_thumbnailimageId: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Indicates the business unit that owns this. */
			readonly OwningBusinessUnit: string;
			/** Indicates the team that owns this. */
			readonly OwningTeam: string;
			/** Indicates the person who owns this. */
			readonly OwningUser: string;
			/** Status of the content block */
			readonly statecode: string;
			/** Reason for the status of the content block */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_contentblock {
		enum msdyncrm_available_in {
			/** 192350000 */
			Email,
			/** 192350001 */
			Forms,
			/** 192350002 */
			Pages
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 192350000 */
			Draft,
			/** 192350004 */
			Expired,
			/** 192350001 */
			Live,
			/** 192350003 */
			Live_editable,
			/** 192350002 */
			Stopped
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}