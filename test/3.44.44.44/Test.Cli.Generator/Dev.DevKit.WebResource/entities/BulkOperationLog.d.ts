//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBulkOperationLog_Information {
		interface tab_general_Sections {
			general: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the error code that is used to troubleshoot issues in the bulk operation. */
			ErrorNumber: DevKit.Controls.Integer;
			/** Choose the account, contact, lead, or list that the bulk operation log item applies to. */
			RegardingObjectId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormBulkOperationLog_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form BulkOperationLog_Information */
		Body: DevKit.FormBulkOperationLog_Information.Body;
		/** The Navigation of form BulkOperationLog_Information */
		Navigation: DevKit.FormBulkOperationLog_Information.Navigation;
		/** The SidePanes of form BulkOperationLog_Information */
		SidePanes: DevKit.SidePanes;
	}
	class BulkOperationLogApi {
		/**
		* DynamicsCrm.DevKit BulkOperationLogApi
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
		/** Shows the data value at which an error occurred during the quick campaign. */
		AdditionalInfo: string;
		/** Shows the quick campaign record that the log applies to. This information is used to relate log data to the parent quick campaign. */
		BulkOperationId: string;
		/** Unique identifier of the bulk operation log. */
		BulkOperationLogId: string;
		/** Shows the campaign activity record that the log applies to. This information is used to relate log data to the parent campaign activity. */
		CampaignActivityId: string;
		/** Choose the activity or other item created by the bulk operation. */
		createdobjectid_account: string;
		/** Choose the activity or other item created by the bulk operation. */
		createdobjectid_activitypointer: string;
		/** Choose the activity or other item created by the bulk operation. */
		createdobjectid_contact: string;
		/** Choose the activity or other item created by the bulk operation. */
		createdobjectid_lead: string;
		/** Choose the activity or other item created by the bulk operation. */
		createdobjectid_opportunity: string;
		/** The error description formatted. */
		ErrorDescriptionFormatted: string;
		/** Shows the error code that is used to troubleshoot issues in the bulk operation. */
		readonly ErrorNumber: number;
		/** The error number formatted. */
		ErrorNumberFormatted: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** name */
		Name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Choose the account, contact, lead, or list that the bulk operation log item applies to. */
		regardingobjectid_account: string;
		/** Choose the account, contact, lead, or list that the bulk operation log item applies to. */
		regardingobjectid_contact: string;
		/** Choose the account, contact, lead, or list that the bulk operation log item applies to. */
		regardingobjectid_lead: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Shows the data value at which an error occurred during the quick campaign. */
			readonly AdditionalInfo: string;
			/** Shows the quick campaign record that the log applies to. This information is used to relate log data to the parent quick campaign. */
			readonly BulkOperationId: string;
			/** Unique identifier of the bulk operation log. */
			readonly BulkOperationLogId: string;
			/** Shows the campaign activity record that the log applies to. This information is used to relate log data to the parent campaign activity. */
			readonly CampaignActivityId: string;
			/** Choose the activity or other item created by the bulk operation. */
			readonly createdobjectid_account: string;
			/** Choose the activity or other item created by the bulk operation. */
			readonly createdobjectid_activitypointer: string;
			/** Choose the activity or other item created by the bulk operation. */
			readonly createdobjectid_contact: string;
			/** Choose the activity or other item created by the bulk operation. */
			readonly createdobjectid_lead: string;
			/** Choose the activity or other item created by the bulk operation. */
			readonly createdobjectid_opportunity: string;
			/** The error description formatted. */
			readonly ErrorDescriptionFormatted: string;
			/** Shows the error code that is used to troubleshoot issues in the bulk operation. */
			readonly ErrorNumber: string;
			/** The error number formatted. */
			readonly ErrorNumberFormatted: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** name */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Choose the account, contact, lead, or list that the bulk operation log item applies to. */
			readonly regardingobjectid_account: string;
			/** Choose the account, contact, lead, or list that the bulk operation log item applies to. */
			readonly regardingobjectid_contact: string;
			/** Choose the account, contact, lead, or list that the bulk operation log item applies to. */
			readonly regardingobjectid_lead: string;
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
	namespace BulkOperationLog {
		enum BulkOperationIdType {
		}
		enum CampaignActivityIdType {
		}
		enum CreatedObjectIdTypeCode {
		}
		enum RegardingObjectIdTypeCode {
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