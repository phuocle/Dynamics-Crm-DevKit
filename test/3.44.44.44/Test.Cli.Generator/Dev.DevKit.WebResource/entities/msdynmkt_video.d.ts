//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_video_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdynmkt_video_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_video_Information */
		Body: DevKit.Formmsdynmkt_video_Information.Body;
		/** The Navigation of form msdynmkt_video_Information */
		Navigation: DevKit.Formmsdynmkt_video_Information.Navigation;
		/** The SidePanes of form msdynmkt_video_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_videoApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_videoApi
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
		msdynmkt_aitags: string;
		msdynmkt_binarymetadata: string;
		msdynmkt_checkedoutto: string;
		msdynmkt_checkedouttocriteria: string;
		msdynmkt_cmsid: string;
		msdynmkt_cognitiveInformation: string;
		msdynmkt_createddatetime: string;
		msdynmkt_ischeckedouttome: boolean;
		msdynmkt_ispublished: boolean;
		msdynmkt_keywords: string;
		msdynmkt_lastmodified: string;
		msdynmkt_lastmodifiedby: string;
		msdynmkt_lastmodifieddatetime: string;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		msdynmkt_previewurl: string;
		msdynmkt_processingstatus: string;
		msdynmkt_publicUrl: string;
		msdynmkt_publishedby: string;
		msdynmkt_publisheddatetime: string;
		msdynmkt_publishedversion: string;
		msdynmkt_state: string;
		msdynmkt_thumbnailUrl: string;
		msdynmkt_type: string;
		msdynmkt_variantinfo: string;
		msdynmkt_version: string;
		/** Unique identifier for entity instances */
		msdynmkt_videoId: string;
		readonly FormattedValue: {
			readonly msdynmkt_aitags: string;
			readonly msdynmkt_binarymetadata: string;
			readonly msdynmkt_checkedoutto: string;
			readonly msdynmkt_checkedouttocriteria: string;
			readonly msdynmkt_cmsid: string;
			readonly msdynmkt_cognitiveInformation: string;
			readonly msdynmkt_createddatetime: string;
			readonly msdynmkt_ischeckedouttome: string;
			readonly msdynmkt_ispublished: string;
			readonly msdynmkt_keywords: string;
			readonly msdynmkt_lastmodified: string;
			readonly msdynmkt_lastmodifiedby: string;
			readonly msdynmkt_lastmodifieddatetime: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			readonly msdynmkt_previewurl: string;
			readonly msdynmkt_processingstatus: string;
			readonly msdynmkt_publicUrl: string;
			readonly msdynmkt_publishedby: string;
			readonly msdynmkt_publisheddatetime: string;
			readonly msdynmkt_publishedversion: string;
			readonly msdynmkt_state: string;
			readonly msdynmkt_thumbnailUrl: string;
			readonly msdynmkt_type: string;
			readonly msdynmkt_variantinfo: string;
			readonly msdynmkt_version: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_videoId: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdynmkt_video {
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