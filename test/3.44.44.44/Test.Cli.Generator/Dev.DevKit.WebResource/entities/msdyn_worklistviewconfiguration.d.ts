﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_worklistviewconfiguration_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_defaultsortconfiguration: DevKit.Controls.String;
			msdyn_entityconfiguration: DevKit.Controls.String;
			msdyn_filterconfiguration: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Security roles enabled for worklist configuration */
			msdyn_securityrolelist: DevKit.Controls.String;
			/** Tags Configuration for worklist view */
			msdyn_tagsconfiguration: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_worklistviewconfiguration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_worklistviewconfiguration_Information */
		Body: DevKit.Formmsdyn_worklistviewconfiguration_Information.Body;
		/** The Navigation of form msdyn_worklistviewconfiguration_Information */
		Navigation: DevKit.Formmsdyn_worklistviewconfiguration_Information.Navigation;
		/** The SidePanes of form msdyn_worklistviewconfiguration_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_worklistviewconfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyn_worklistviewconfigurationApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Json to hold sort options set by admin */
		msdyn_adminsortconfiguration: string;
		/** Is Auto refresh enable for focused view */
		msdyn_autorefreshenable: number;
		/** Refresh interval for auto refresh in focused view stored in min */
		msdyn_autorefreshinterval: number;
		/** Layouts of card designed by admin */
		msdyn_cardlayout: string;
		msdyn_defaultsortconfiguration: string;
		msdyn_entityconfiguration: string;
		msdyn_filterconfiguration: string;
		/** Indicates if roles for current view are inherited from parent settings. */
		msdyn_inheritrolesfromparentsettings: boolean;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Many to one relationship to sales acceleration entity's primary key */
		msdyn_salesaccelerationsettingsid: string;
		/** Security roles enabled for worklist configuration */
		msdyn_securityrolelist: string;
		/** Tags Configuration for worklist view */
		msdyn_tagsconfiguration: string;
		/** Sales accelerator worklist view type */
		msdyn_viewtype: OptionSet.msdyn_worklistviewconfiguration.msdyn_viewtype;
		/** Unique identifier for entity instances */
		msdyn_worklistviewconfigurationId: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Work List View Configuration */
		statecode: OptionSet.msdyn_worklistviewconfiguration.statecode;
		/** Reason for the status of the Work List View Configuration */
		statuscode: OptionSet.msdyn_worklistviewconfiguration.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Json to hold sort options set by admin */
			readonly msdyn_adminsortconfiguration: string;
			/** Is Auto refresh enable for focused view */
			readonly msdyn_autorefreshenable: string;
			/** Refresh interval for auto refresh in focused view stored in min */
			readonly msdyn_autorefreshinterval: string;
			/** Layouts of card designed by admin */
			readonly msdyn_cardlayout: string;
			readonly msdyn_defaultsortconfiguration: string;
			readonly msdyn_entityconfiguration: string;
			readonly msdyn_filterconfiguration: string;
			/** Indicates if roles for current view are inherited from parent settings. */
			readonly msdyn_inheritrolesfromparentsettings: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Many to one relationship to sales acceleration entity's primary key */
			readonly msdyn_salesaccelerationsettingsid: string;
			/** Security roles enabled for worklist configuration */
			readonly msdyn_securityrolelist: string;
			/** Tags Configuration for worklist view */
			readonly msdyn_tagsconfiguration: string;
			/** Sales accelerator worklist view type */
			readonly msdyn_viewtype: string;
			/** Unique identifier for entity instances */
			readonly msdyn_worklistviewconfigurationId: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Work List View Configuration */
			readonly statecode: string;
			/** Reason for the status of the Work List View Configuration */
			readonly statuscode: string;
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
	namespace msdyn_worklistviewconfiguration {
		enum msdyn_viewtype {
			/** 0 */
			Sequence,
			/** 1 */
			Suggestion
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
			/** 2 */
			Published
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