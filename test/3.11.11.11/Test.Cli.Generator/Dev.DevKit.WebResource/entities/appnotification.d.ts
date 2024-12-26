//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formappnotification_Information {
		interface Tabs {
		}
		interface Body {
			/** Body of the notification */
			Body: DevKit.Controls.String;
			/** Custom data for the notification that can be used by the notification card */
			Data: DevKit.Controls.String;
			IconType: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Priority of the notification */
			Priority: DevKit.Controls.OptionSet;
			/** Title for the notification */
			Title: DevKit.Controls.String;
			/** Type of toast behavior for the notification */
			ToastType: DevKit.Controls.OptionSet;
			/** After the specified number of seconds the notification will be deleted */
			TTLInSeconds: DevKit.Controls.Integer;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formappnotification_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form appnotification_Information */
		Body: DevKit.Formappnotification_Information.Body;
		/** The Process of form appnotification_Information */
		Process: DevKit.Formappnotification_Information.Process;
		/** The SidePanes of form appnotification_Information */
		SidePanes: DevKit.SidePanes;
	}
	class appnotificationApi {
		/**
		* DynamicsCrm.DevKit appnotificationApi
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
		/** Model-driven app in which the notification needs to be shown. If not specified, the notification will show in all apps. */
		AppModuleId: string;
		/** Unique identifier for entity instances */
		appnotificationId: string;
		/** Body of the notification */
		Body: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Custom data for the notification that can be used by the notification card */
		Data: string;
		IconType: OptionSet.appnotification.IconType;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
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
		/** Partitioning will be based on owner and it is recommended to specify this field for all operations for performance reason */
		PartitionId: string;
		/** Priority of the notification */
		Priority: OptionSet.appnotification.Priority;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Title for the notification */
		Title: string;
		/** Type of toast behavior for the notification */
		ToastType: OptionSet.appnotification.ToastType;
		/** After the specified number of seconds the notification will be deleted */
		TTLInSeconds: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Model-driven app in which the notification needs to be shown. If not specified, the notification will show in all apps. */
			readonly AppModuleId: string;
			/** Unique identifier for entity instances */
			readonly appnotificationId: string;
			/** Body of the notification */
			readonly Body: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Custom data for the notification that can be used by the notification card */
			readonly Data: string;
			readonly IconType: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
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
			/** Partitioning will be based on owner and it is recommended to specify this field for all operations for performance reason */
			readonly PartitionId: string;
			/** Priority of the notification */
			readonly Priority: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Title for the notification */
			readonly Title: string;
			/** Type of toast behavior for the notification */
			readonly ToastType: string;
			/** After the specified number of seconds the notification will be deleted */
			readonly TTLInSeconds: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace appnotification {
		enum IconType {
			/** 100000005 */
			Custom,
			/** 100000002 */
			Failure,
			/** 100000000 */
			Info,
			/** 100000004 */
			Mention,
			/** 100000001 */
			Success,
			/** 100000003 */
			Warning
		}
		enum OwnerIdType {
		}
		enum Priority {
			/** 200000001 */
			High,
			/** 200000000 */
			Normal
		}
		enum ToastType {
			/** 200000001 */
			Hidden,
			/** 200000000 */
			Timed
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}