//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormContent_Block_Filter {
		interface Tabs {
		}
		interface Body {
			msdynmkt_protected: DevKit.Controls.ActionCards;
			msdynmkt_tags: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class FormContent_Block_Filter extends DevKit.IForm {
		/**
		* Content Block Filter [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Content_Block_Filter */
		Body: DevKit.FormContent_Block_Filter.Body;
		/** The Navigation of form Content_Block_Filter */
		Navigation: DevKit.FormContent_Block_Filter.Navigation;
		/** The SidePanes of form Content_Block_Filter */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormDesigner {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the Fragment */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			entityimage: DevKit.Controls.ELSE1???;//entityimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the Fragment */
			statuscode: DevKit.Controls.OptionSet;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			msdynmkt_conditionalcontent: DevKit.Controls.String;
			msdynmkt_designerhtml: DevKit.Controls.ActionCards;
			msdynmkt_finalizedhtml: DevKit.Controls.String;
			/** Unique identifier for entity instances */
			msdynmkt_fragmentId: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_placeholders: DevKit.Controls.String;
			msdynmkt_previewhtml: DevKit.Controls.String;
			msdynmkt_protected: DevKit.Controls.Boolean;
			msdynmkt_tags: DevKit.Controls.String;
			msdynmkt_thumbnailimage: DevKit.Controls.ELSE1???;//msdynmkt_thumbnailimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormDesigner extends DevKit.IForm {
		/**
		* Designer [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Designer */
		Body: DevKit.FormDesigner.Body;
		/** The Header section of form Designer */
		Header: DevKit.FormDesigner.Header;
		/** The Navigation of form Designer */
		Navigation: DevKit.FormDesigner.Navigation;
		/** The SidePanes of form Designer */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormGallery_Properties {
		interface Header extends DevKit.Controls.IHeader {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface Tabs {
		}
		interface Body {
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Unique identifier for entity instances */
			msdynmkt_fragmentId: DevKit.Controls.String;
			msdynmkt_linkedemails: DevKit.Controls.ActionCards;
			msdynmkt_linkedtemplates: DevKit.Controls.ActionCards;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_protected: DevKit.Controls.Boolean;
			msdynmkt_tags: DevKit.Controls.String;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Reason for the status of the Fragment */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {

		}
	}
	class FormGallery_Properties extends DevKit.IForm {
		/**
		* Gallery Properties [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Gallery_Properties */
		Body: DevKit.FormGallery_Properties.Body;
		/** The Header section of form Gallery_Properties */
		Header: DevKit.FormGallery_Properties.Header;
		/** The Navigation of form Gallery_Properties */
		Navigation: DevKit.FormGallery_Properties.Navigation;
		/** The SidePanes of form Gallery_Properties */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormProperties {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_tab_2_Sections {
			history: DevKit.Controls.Section;
			settings: DevKit.Controls.Section;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			entityimage: DevKit.Controls.ELSE1???;//entityimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			msdynmkt_designerhtml: DevKit.Controls.String;
			msdynmkt_finalizedhtml: DevKit.Controls.String;
			msdynmkt_linkedemails: DevKit.Controls.ActionCards;
			msdynmkt_linkedtemplates: DevKit.Controls.ActionCards;
			msdynmkt_protected: DevKit.Controls.Boolean;
			msdynmkt_tags: DevKit.Controls.String;
			msdynmkt_thumbnailimage: DevKit.Controls.ELSE1???;//msdynmkt_thumbnailimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Reason for the status of the Fragment */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {

		}
	}
	class FormProperties extends DevKit.IForm {
		/**
		* Properties [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Properties */
		Body: DevKit.FormProperties.Body;
		/** The Header section of form Properties */
		Header: DevKit.FormProperties.Header;
		/** The Navigation of form Properties */
		Navigation: DevKit.FormProperties.Navigation;
		/** The SidePanes of form Properties */
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
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_protected: DevKit.Controls.Boolean;
			msdynmkt_tags: DevKit.Controls.ActionCards;
			msdynmkt_thumbnailimage: DevKit.Controls.ELSE1???;//msdynmkt_thumbnailimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			/** Reason for the status of the Fragment */
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
	namespace FormSave_as_block_properties2 {
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
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_protected: DevKit.Controls.Boolean;
			msdynmkt_tags: DevKit.Controls.ActionCards;
			msdynmkt_thumbnailimage: DevKit.Controls.ELSE1???;//msdynmkt_thumbnailimage - 4273EDBD-AC1D-40D3-9FB2-095C621B552D -- FOR DEBUG 
			/** Reason for the status of the Fragment */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {

		}
	}
	class FormSave_as_block_properties2 extends DevKit.IForm {
		/**
		* Save as block properties [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Save_as_block_properties2 */
		Body: DevKit.FormSave_as_block_properties2.Body;
		/** The Header section of form Save_as_block_properties2 */
		Header: DevKit.FormSave_as_block_properties2.Header;
		/** The Navigation of form Save_as_block_properties2 */
		Navigation: DevKit.FormSave_as_block_properties2.Navigation;
		/** The SidePanes of form Save_as_block_properties2 */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_fragmentApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_fragmentApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdynmkt_fragment.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		msdynmkt_conditionalcontent: string;
		msdynmkt_designerhtml: string;
		msdynmkt_finalizedhtml: string;
		/** Unique identifier for entity instances */
		msdynmkt_fragmentId: string;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		/** Result of migration from outbound marketing content part. */
		msdynmkt_obmmigrationinfo: string;
		msdynmkt_placeholders: string;
		msdynmkt_previewhtml: string;
		msdynmkt_protected: boolean;
		msdynmkt_tags: string;
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		msdynmkt_thumbnailimage: string;
		msdynmkt_thumbnailimage_Timestamp: number;
		msdynmkt_thumbnailimage_URL: string;
		readonly msdynmkt_thumbnailimageId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Content block */
		statecode: OptionSet.msdynmkt_fragment.statecode;
		/** Reason for the status of the Fragment */
		statuscode: OptionSet.msdynmkt_fragment.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdynmkt_conditionalcontent: string;
			readonly msdynmkt_designerhtml: string;
			readonly msdynmkt_finalizedhtml: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_fragmentId: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			/** Result of migration from outbound marketing content part. */
			readonly msdynmkt_obmmigrationinfo: string;
			readonly msdynmkt_placeholders: string;
			readonly msdynmkt_previewhtml: string;
			readonly msdynmkt_protected: string;
			readonly msdynmkt_tags: string;
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly msdynmkt_thumbnailimage: string;
			readonly msdynmkt_thumbnailimage_Timestamp: string;
			readonly msdynmkt_thumbnailimage_URL: string;
			readonly msdynmkt_thumbnailimageId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Content block */
			readonly statecode: string;
			/** Reason for the status of the Fragment */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdynmkt_fragment {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Draft,
			/** 100 */
			Inactive,
			/** 2 */
			Ready_to_send
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