//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormFilter_Properties_View {
		interface Tabs {
		}
		interface Body {
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique ID of the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			tagpicker_ctrl: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msevtmgt_msdyncrm_file_msevtmgt_eventimage: DevKit.Controls.NavigationItem
		}
	}
	class FormFilter_Properties_View extends DevKit.IForm {
		/**
		* Filter Properties View [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Filter_Properties_View */
		Body: DevKit.FormFilter_Properties_View.Body;
		/** The Navigation of form Filter_Properties_View */
		Navigation: DevKit.FormFilter_Properties_View.Navigation;
		/** The SidePanes of form Filter_Properties_View */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormGallery_Properties_View {
		interface Tabs {
		}
		interface Body {
			/** Alt text */
			msdyncrm_Alttext: DevKit.Controls.String;
			msdyncrm_BlobCdnUri: DevKit.Controls.String;
			msdyncrm_BlobSize: DevKit.Controls.Integer;
			msdyncrm_ContentType: DevKit.Controls.String;
			msdyncrm_height: DevKit.Controls.Integer;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_width: DevKit.Controls.Integer;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique ID of the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			tagpicker_ctrl: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msevtmgt_msdyncrm_file_msevtmgt_eventimage: DevKit.Controls.NavigationItem
		}
	}
	class FormGallery_Properties_View extends DevKit.IForm {
		/**
		* Gallery Properties View [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Gallery_Properties_View */
		Body: DevKit.FormGallery_Properties_View.Body;
		/** The Navigation of form Gallery_Properties_View */
		Navigation: DevKit.FormGallery_Properties_View.Navigation;
		/** The SidePanes of form Gallery_Properties_View */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyncrm_file_Information {
		interface Tabs {
		}
		interface Body {
			msdyncrm_BlobCdnUri: DevKit.Controls.String;
			msdyncrm_BlobSize: DevKit.Controls.Integer;
			msdyncrm_category: DevKit.Controls.MultiOptionSet;
			msdyncrm_ContentType: DevKit.Controls.String;
			/** The name of the custom entity */
			msdyncrm_name: DevKit.Controls.String;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique ID of the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			WebResource_Thumbnail: DevKit.Controls.WebResource;
		}
		interface Navigation {
			msevtmgt_msdyncrm_file_msevtmgt_eventimage: DevKit.Controls.NavigationItem
		}
		interface Grid {
			File_Keywords: DevKit.Controls.Grid;
		}
	}
	class Formmsdyncrm_file_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_file_Information */
		Body: DevKit.Formmsdyncrm_file_Information.Body;
		/** The Navigation of form msdyncrm_file_Information */
		Navigation: DevKit.Formmsdyncrm_file_Information.Navigation;
		/** The Grid of form msdyncrm_file_Information */
		Grid: DevKit.Formmsdyncrm_file_Information.Grid;
		/** The SidePanes of form msdyncrm_file_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_fileApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_fileApi
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
		readonly ComponentState: OptionSet.msdyncrm_file.ComponentState;
		/** Unique ID of the user who created the record */
		readonly CreatedBy: string;
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique ID of the delegate user who created the record */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique ID of the user who modified the record */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique ID of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		/** Alt text */
		msdyncrm_Alttext: string;
		msdyncrm_BlobCdnUri: string;
		msdyncrm_BlobSize: number;
		msdyncrm_BlobUri: string;
		msdyncrm_category: Array<OptionSet.msdyncrm_file.msdyncrm_category>;
		msdyncrm_cmsid: string;
		msdyncrm_ContentType: string;
		msdyncrm_copyUrl: string;
		readonly msdyncrm_filecontent_name: string;
		/** Unique ID for entity instances */
		msdyncrm_fileId: string;
		msdyncrm_height: number;
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		msdyncrm_mainimage: string;
		msdyncrm_mainimage_Timestamp: number;
		msdyncrm_mainimage_URL: string;
		readonly msdyncrm_mainimageId: string;
		/** The name of the custom entity */
		msdyncrm_name: string;
		msdyncrm_rethumbnail: boolean;
		/** BLOB SAS token, which permits assets to be uploaded to the BLOB URL */
		msdyncrm_sastoken: string;
		/** SAS token expiration date */
		msdyncrm_sastokenexpirationdate_TimezoneDateAndTime: Date;
		msdyncrm_source: OptionSet.msdyncrm_file.msdyncrm_source;
		msdyncrm_thumbnail_url: string;
		msdyncrm_width: number;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique ID of the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique ID of the team that owns the record */
		readonly OwningTeam: string;
		/** Unique ID of the team that owns the record */
		readonly OwningUser: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the file */
		statecode: OptionSet.msdyncrm_file.statecode;
		/** Reason for the status of the file */
		statuscode: OptionSet.msdyncrm_file.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Time-zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique ID of the user who created the record */
			readonly CreatedBy: string;
			/** Date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique ID of the delegate user who created the record */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique ID of the user who modified the record */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique ID of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			/** Alt text */
			readonly msdyncrm_Alttext: string;
			readonly msdyncrm_BlobCdnUri: string;
			readonly msdyncrm_BlobSize: string;
			readonly msdyncrm_BlobUri: string;
			readonly msdyncrm_category: Array<string>;
			readonly msdyncrm_cmsid: string;
			readonly msdyncrm_ContentType: string;
			readonly msdyncrm_copyUrl: string;
			readonly msdyncrm_filecontent_name: string;
			/** Unique ID for entity instances */
			readonly msdyncrm_fileId: string;
			readonly msdyncrm_height: string;
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly msdyncrm_mainimage: string;
			readonly msdyncrm_mainimage_Timestamp: string;
			readonly msdyncrm_mainimage_URL: string;
			readonly msdyncrm_mainimageId: string;
			/** The name of the custom entity */
			readonly msdyncrm_name: string;
			readonly msdyncrm_rethumbnail: string;
			/** BLOB SAS token, which permits assets to be uploaded to the BLOB URL */
			readonly msdyncrm_sastoken: string;
			/** SAS token expiration date */
			readonly msdyncrm_sastokenexpirationdate_TimezoneDateAndTime: string;
			readonly msdyncrm_source: string;
			readonly msdyncrm_thumbnail_url: string;
			readonly msdyncrm_width: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique ID of the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique ID of the team that owns the record */
			readonly OwningTeam: string;
			/** Unique ID of the team that owns the record */
			readonly OwningUser: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the file */
			readonly statecode: string;
			/** Reason for the status of the file */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time-zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyncrm_file {
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
		enum msdyncrm_category {
			/** 192350000 */
			Logo
		}
		enum msdyncrm_source {
			/** 1 */
			Typeface,
			/** 0 */
			User
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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