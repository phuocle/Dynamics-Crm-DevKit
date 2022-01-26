//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_organizationalunit_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_organizationalunit_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_organizationalunit_Information */
		Body: DevKit.Formmsdyn_organizationalunit_Information.Body;
		/** The Process of form msdyn_organizationalunit_Information */
		Process: DevKit.Formmsdyn_organizationalunit_Information.Process;
		/** The SidePanes of form msdyn_organizationalunit_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_organizationalunit_Information2 {
		interface tab__3D875146_3739_4B34_9BB2_ABC10665669D_Sections {
			_7588A081_A7EE_4340_87A0_08057DA1D0FE: DevKit.Controls.Section;
		}
		interface tab__B2AA5EFF_A9B6_48C0_B71E_6E464591EBA4_Sections {
			_D952AB6B_D6B2_462B_B63E_2555C38B9A95: DevKit.Controls.Section;
		}
		interface tab__3D875146_3739_4B34_9BB2_ABC10665669D extends DevKit.Controls.ITab {
			Section: tab__3D875146_3739_4B34_9BB2_ABC10665669D_Sections;
		}
		interface tab__B2AA5EFF_A9B6_48C0_B71E_6E464591EBA4 extends DevKit.Controls.ITab {
			Section: tab__B2AA5EFF_A9B6_48C0_B71E_6E464591EBA4_Sections;
		}
		interface Tabs {
			_3D875146_3739_4B34_9BB2_ABC10665669D: tab__3D875146_3739_4B34_9BB2_ABC10665669D;
			_B2AA5EFF_A9B6_48C0_B71E_6E464591EBA4: tab__B2AA5EFF_A9B6_48C0_B71E_6E464591EBA4;
		}
		interface Body {
			Tab: Tabs;
			/** Select the currency that the organization uses to track its costs. */
			msdyn_currency: DevKit.Controls.Lookup;
			/** Enter a description of the organizational unit. */
			msdyn_description: DevKit.Controls.String;
			/** The latitude to use for the location of organizational unit. */
			msdyn_Latitude: DevKit.Controls.Double;
			/** The longitude to use for the location of organizational unit. */
			msdyn_Longitude: DevKit.Controls.Double;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
		}
		interface Navigation {
			nav_msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			PriceList: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_organizationalunit_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_organizationalunit_Information2 */
		Body: DevKit.Formmsdyn_organizationalunit_Information2.Body;
		/** The Navigation of form msdyn_organizationalunit_Information2 */
		Navigation: DevKit.Formmsdyn_organizationalunit_Information2.Navigation;
		/** The Process of form msdyn_organizationalunit_Information2 */
		Process: DevKit.Formmsdyn_organizationalunit_Information2.Process;
		/** The Grid of form msdyn_organizationalunit_Information2 */
		Grid: DevKit.Formmsdyn_organizationalunit_Information2.Grid;
		/** The SidePanes of form msdyn_organizationalunit_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_organizationalunitApi {
		/**
		* DynamicsCrm.DevKit msdyn_organizationalunitApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Select the currency that the organization uses to track its costs. */
		msdyn_currency: DevKit.WebApi.LookupValue;
		/** Enter a description of the organizational unit. */
		msdyn_description: DevKit.WebApi.StringValue;
		/** The latitude to use for the location of organizational unit. */
		msdyn_Latitude: DevKit.WebApi.DoubleValue;
		/** The longitude to use for the location of organizational unit. */
		msdyn_Longitude: DevKit.WebApi.DoubleValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_organizationalunitId: DevKit.WebApi.GuidValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the Organizational Unit */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Organizational Unit */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_organizationalunit {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}