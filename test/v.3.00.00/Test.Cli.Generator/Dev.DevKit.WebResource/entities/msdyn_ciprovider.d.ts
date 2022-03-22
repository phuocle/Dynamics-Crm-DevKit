//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ciprovider_Information {
		interface tab__2190EC7E_BB48_4408_AA64_6008072A8A39_Sections {
			_2190EC7E_BB48_4408_AA64_6008072A8A39_SECTION_3: DevKit.Controls.Section;
			_C8623D8D_AFFD_453D_8CAE_3DA82648CCF0_SECTION_4: DevKit.Controls.Section;
		}
		interface tab__2190EC7E_BB48_4408_AA64_6008072A8A39 extends DevKit.Controls.ITab {
			Section: tab__2190EC7E_BB48_4408_AA64_6008072A8A39_Sections;
		}
		interface Tabs {
			_2190EC7E_BB48_4408_AA64_6008072A8A39: tab__2190EC7E_BB48_4408_AA64_6008072A8A39;
		}
		interface Body {
			Tab: Tabs;
			msdyn_appselector: DevKit.Controls.ActionCards;
			/** API Version */
			msdyn_ciproviderapiversion: DevKit.Controls.OptionSet;
			/** Enable Outbound Communication */
			msdyn_ClickToAct: DevKit.Controls.Boolean;
			/** Custom Parameters for the Widget to load */
			msdyn_customparams: DevKit.Controls.String;
			/** Enable CIF Analytics for the current provider */
			msdyn_EnableAnalytics: DevKit.Controls.Boolean;
			/** The label is displayed as the title on the widget */
			msdyn_Label: DevKit.Controls.String;
			/** URL for the Channel provider */
			msdyn_LandingUrl: DevKit.Controls.String;
			/** Name of the Channel provider */
			msdyn_name: DevKit.Controls.String;
			msdyn_roleselector: DevKit.Controls.ActionCards;
			/** Select Channel Order as 0 for this Channel to take precedence over others. */
			msdyn_SortOrder: DevKit.Controls.Integer;
			/** Domain to be whitelisted */
			msdyn_trusteddomain: DevKit.Controls.String;
			WebResource_msdyn_cifmessage: DevKit.Controls.WebResource;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_ciprovider_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ciprovider_Information */
		Body: DevKit.Formmsdyn_ciprovider_Information.Body;
		/** The Process of form msdyn_ciprovider_Information */
		Process: DevKit.Formmsdyn_ciprovider_Information.Process;
		/** The SidePanes of form msdyn_ciprovider_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ciproviderApi {
		/**
		* DynamicsCrm.DevKit msdyn_ciproviderApi
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
		/** Select Unified Interface Apps for the Channel */
		msdyn_AppSelector: string;
		/** Version of the CIF Solution */
		msdyn_cifsolversion: string;
		/** API Version */
		msdyn_ciproviderapiversion: OptionSet.msdyn_ciprovider.msdyn_ciproviderapiversion;
		/** Unique identifier for CIProvider records */
		msdyn_ciproviderId: string;
		/** Enable Outbound Communication */
		msdyn_ClickToAct: boolean;
		/** Custom Parameters for the Widget to load */
		msdyn_customparams: string;
		/** Enable CIF Analytics for the current provider */
		msdyn_EnableAnalytics: boolean;
		/** The label is displayed as the title on the widget */
		msdyn_Label: string;
		/** URL for the Channel provider */
		msdyn_LandingUrl: string;
		/** Name of the Channel provider */
		msdyn_name: string;
		/** Select the Roles for the Channel */
		msdyn_RoleSelector: string;
		/** Select Channel Order as 0 for this Channel to take precedence over others. */
		msdyn_SortOrder: number;
		/** Domain to be whitelisted */
		msdyn_trusteddomain: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Channel Provider */
		statecode: OptionSet.msdyn_ciprovider.statecode;
		/** Reason for the status of the Channel Provider */
		statuscode: OptionSet.msdyn_ciprovider.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_ciprovider {
		enum msdyn_ciproviderapiversion {
			/** 0 */
			_10,
			/** 1 */
			_20
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}