//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormEquipment_Information {
		interface tab_general_Sections {
			section_1: DevKit.Controls.Section;
		}
		interface tab_workhours_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_workhours extends DevKit.Controls.ITab {
			Section: tab_workhours_Sections;
		}
		interface Tabs {
			general: tab_general;
			workhours: tab_workhours;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the business unit that the Equipment belongs to. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** Fiscal calendar associated with the facility/equipment. */
			CalendarId: DevKit.Controls.Lookup;
			/** Description of the facility/equipment. */
			Description: DevKit.Controls.String;
			/** Email address of person to contact about the use of the facility/equipment. */
			EMailAddress: DevKit.Controls.String;
			/** Unique identifier for OrganizationalUnit associated with Equipment */
			msdyn_OrganizationalUnitId: DevKit.Controls.Lookup;
			/** Name of the facility/equipment. */
			Name: DevKit.Controls.String;
			/** Site where the facility/equipment is located. */
			SiteId: DevKit.Controls.Lookup;
			/** Local time zone where the facility/equipment is located. */
			TimeZoneCode: DevKit.Controls.Integer;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormEquipment_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Equipment_Information */
		Body: DevKit.FormEquipment_Information.Body;
		/** The Process of form Equipment_Information */
		Process: DevKit.FormEquipment_Information.Process;
		/** The SidePanes of form Equipment_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormFacilityEquipment_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the business unit that the Equipment belongs to. */
			BusinessUnitId: DevKit.Controls.Lookup;
			/** Unique identifier for OrganizationalUnit associated with Equipment */
			msdyn_OrganizationalUnitId: DevKit.Controls.Lookup;
			/** Name of the facility/equipment. */
			Name: DevKit.Controls.String;
			/** Site where the facility/equipment is located. */
			SiteId: DevKit.Controls.Lookup;
			/** Local time zone where the facility/equipment is located. */
			TimeZoneCode: DevKit.Controls.Integer;
		}
	}
	class FormFacilityEquipment_Quick_Create extends DevKit.IForm {
		/**
		* Facility/Equipment Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form FacilityEquipment_Quick_Create */
		Body: DevKit.FormFacilityEquipment_Quick_Create.Body;
	}
	class EquipmentApi {
		/**
		* DynamicsCrm.DevKit EquipmentApi
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
		/** Shows the business unit that the Equipment belongs to. */
		BusinessUnitId: string;
		/** Fiscal calendar associated with the facility/equipment. */
		CalendarId: string;
		/** Unique identifier of the user who created the facility/equipment entry. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the equipment. */
		readonly CreatedOnBehalfBy: string;
		/** Description of the facility/equipment. */
		Description: string;
		/** For internal use only. */
		DisplayInServiceViews: boolean;
		/** Email address of person to contact about the use of the facility/equipment. */
		EMailAddress: string;
		/** Unique identifier of the facility/equipment. */
		EquipmentId: string;
		/** Exchange rate for the currency associated with the equipment with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Whether the facility/equipment is disabled or operational. */
		IsDisabled: boolean;
		/** Unique identifier of the user who last modified the facility/equipment. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the equipment. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for OrganizationalUnit associated with Equipment */
		msdyn_OrganizationalUnitId: string;
		/** Name of the facility/equipment. */
		Name: string;
		/** Unique identifier of the parent business unit. */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Site where the facility/equipment is located. */
		SiteId: string;
		/** Skills needed to operate the facility/equipment. */
		Skills: string;
		/** Local time zone where the facility/equipment is located. */
		TimeZoneCode: number;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the equipment. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Shows the business unit that the Equipment belongs to. */
			readonly BusinessUnitId: string;
			/** Fiscal calendar associated with the facility/equipment. */
			readonly CalendarId: string;
			/** Unique identifier of the user who created the facility/equipment entry. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the equipment. */
			readonly CreatedOnBehalfBy: string;
			/** Description of the facility/equipment. */
			readonly Description: string;
			/** For internal use only. */
			readonly DisplayInServiceViews: string;
			/** Email address of person to contact about the use of the facility/equipment. */
			readonly EMailAddress: string;
			/** Unique identifier of the facility/equipment. */
			readonly EquipmentId: string;
			/** Exchange rate for the currency associated with the equipment with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Whether the facility/equipment is disabled or operational. */
			readonly IsDisabled: string;
			/** Unique identifier of the user who last modified the facility/equipment. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the equipment. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for OrganizationalUnit associated with Equipment */
			readonly msdyn_OrganizationalUnitId: string;
			/** Name of the facility/equipment. */
			readonly Name: string;
			/** Unique identifier of the parent business unit. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Site where the facility/equipment is located. */
			readonly SiteId: string;
			/** Skills needed to operate the facility/equipment. */
			readonly Skills: string;
			/** Local time zone where the facility/equipment is located. */
			readonly TimeZoneCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the equipment. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Equipment {
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