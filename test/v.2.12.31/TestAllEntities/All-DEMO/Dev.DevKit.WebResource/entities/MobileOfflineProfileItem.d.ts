//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormMobile_Offline_Profile_Item {
		interface tab_GENERALINFORMATION_TAB_Sections {
			Entity_Selection: DevKit.Controls.Section;
			MOBILE_OFFLINE_PROFILE_ITEM_ASSOCIATIONS: DevKit.Controls.Section;
		}
		interface tab_GENERALINFORMATION_TAB extends DevKit.Controls.ITab {
			Section: tab_GENERALINFORMATION_TAB_Sections;
		}
		interface Tabs {
			GENERALINFORMATION_TAB: tab_GENERALINFORMATION_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Enter the name of the mobile offline profile item. */
			Name: DevKit.Controls.String;
			/** Specify data download filter for selected entity */
			RecordDistributionCriteria: DevKit.Controls.OptionSet;
			/** Download my records */
			RecordsOwnedByMe: DevKit.Controls.Boolean;
			/** Download my business unit's records */
			RecordsOwnedByMyBusinessUnit: DevKit.Controls.Boolean;
			/** Download my team's records */
			RecordsOwnedByMyTeam: DevKit.Controls.Boolean;
			/** Mobile offline enabled entity */
			SelectedEntityTypeCode: DevKit.Controls.String;
		}
		interface Grid {
			profileassociationgrid: DevKit.Controls.Grid;
		}
	}
	class FormMobile_Offline_Profile_Item extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Mobile_Offline_Profile_Item
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Mobile_Offline_Profile_Item */
		Body: DevKit.FormMobile_Offline_Profile_Item.Body;
		/** The Grid of form Mobile_Offline_Profile_Item */
		Grid: DevKit.FormMobile_Offline_Profile_Item.Grid;
	}
	class MobileOfflineProfileItemApi {
		/**
		* DynamicsCrm.DevKit MobileOfflineProfileItemApi
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
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Internal Use Only */
		EntityObjectTypeCode: DevKit.WebApi.IntegerValueReadonly;
		/** Version in which the Mobile offline Profile Item is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** For internal use only. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether profile item is validated or not */
		IsValidated: DevKit.WebApi.BooleanValueReadonly;
		/** Information about whether the mobile offline profile item is visible in the Profile Item subgrid. */
		IsVisibleInGrid: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the mobile offline profile item. */
		MobileOfflineProfileItemId: DevKit.WebApi.GuidValue;
		/** For Internal Use Only */
		MobileOfflineProfileItemIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter the name of the mobile offline profile item. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the Mobile Offline Profile Item. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Profile item entity filter criteria */
		ProfileItemEntityFilter: DevKit.WebApi.StringValue;
		/** Displays the last published date time. */
		PublishedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Specify data download filter for selected entity */
		RecordDistributionCriteria: DevKit.WebApi.OptionSetValue;
		/** Download my records */
		RecordsOwnedByMe: DevKit.WebApi.BooleanValue;
		/** Download my business unit's records */
		RecordsOwnedByMyBusinessUnit: DevKit.WebApi.BooleanValue;
		/** Download my team's records */
		RecordsOwnedByMyTeam: DevKit.WebApi.BooleanValue;
		/** Items contained with a particular Profile. */
		RegardingObjectId: DevKit.WebApi.LookupValue;
		/** Internal Use Only */
		RelationshipData: DevKit.WebApi.StringValue;
		/** Internal Use Only */
		SelectedEntityMetadata: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** How often to sync data offline. */
		SyncIntervalInMinutes: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Version number of the Mobile Offline Profile Item. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace MobileOfflineProfileItem {
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
		enum RecordDistributionCriteria {
			/** 1 */
			All_records,
			/** 3 */
			Custom_data_filter,
			/** 0 */
			Download_related_data_only,
			/** 2 */
			Other_data_filter
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
//{'JsForm':['Mobile Offline Profile Item'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}