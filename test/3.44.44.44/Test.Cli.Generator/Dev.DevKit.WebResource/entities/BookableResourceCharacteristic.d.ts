//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBookableResourceCharacteristic_Information {
		interface Tabs {
		}
		interface Body {
			/** Choose the characteristic to associate with the resource. */
			Characteristic: DevKit.Controls.Lookup;
			/** Identifier of the characteristic */
			msdyn_CharacteristicSupportingInfoId: DevKit.Controls.String;
			/** Description of the characteristic */
			msdyn_Description: DevKit.Controls.String;
			/** Expiration date for the characteristic. */
			msdyn_ExpirationDate: DevKit.Controls.Date;
			/** Issue date for the characteristic. */
			msdyn_IssueDate: DevKit.Controls.Date;
			/** Type the name of the association between the resource and characteristic. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Select a rating value that represents the evaluation of a characteristic for a particular resource. */
			RatingValue: DevKit.Controls.Lookup;
			/** Shows the resource associated with the characteristic. */
			Resource: DevKit.Controls.Lookup;
			WebResource_NoteDialog: DevKit.Controls.WebResource;
		}
		interface Navigation {

		}
	}
	class FormBookableResourceCharacteristic_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form BookableResourceCharacteristic_Information */
		Body: DevKit.FormBookableResourceCharacteristic_Information.Body;
		/** The Navigation of form BookableResourceCharacteristic_Information */
		Navigation: DevKit.FormBookableResourceCharacteristic_Information.Navigation;
		/** The SidePanes of form BookableResourceCharacteristic_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormOmnichannel_Bookable_Resource_Characteristic_Main_Form {
		interface Tabs {
		}
		interface Body {
			/** Choose the characteristic to associate with the resource. */
			Characteristic: DevKit.Controls.Lookup;
			/** Type the name of the association between the resource and characteristic. */
			Name: DevKit.Controls.String;
			/** Select a rating value that represents the evaluation of a characteristic for a particular resource. */
			RatingValue: DevKit.Controls.Lookup;
			/** Shows the resource associated with the characteristic. */
			Resource: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormOmnichannel_Bookable_Resource_Characteristic_Main_Form extends DevKit.IForm {
		/**
		* Omnichannel Bookable Resource Characteristic Main Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Omnichannel_Bookable_Resource_Characteristic_Main_Form */
		Body: DevKit.FormOmnichannel_Bookable_Resource_Characteristic_Main_Form.Body;
		/** The Navigation of form Omnichannel_Bookable_Resource_Characteristic_Main_Form */
		Navigation: DevKit.FormOmnichannel_Bookable_Resource_Characteristic_Main_Form.Navigation;
		/** The SidePanes of form Omnichannel_Bookable_Resource_Characteristic_Main_Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormBookableResourceCharacteristic_Quick_Create {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Choose the characteristic to associate with the resource. */
			Characteristic: DevKit.Controls.Lookup;
			/** Select a rating value that represents the evaluation of a characteristic for a particular resource. */
			RatingValue: DevKit.Controls.Lookup;
			/** Shows the resource associated with the characteristic. */
			Resource: DevKit.Controls.Lookup;
		}
	}
	class FormBookableResourceCharacteristic_Quick_Create extends DevKit.IForm {
		/**
		* Quick Create [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form BookableResourceCharacteristic_Quick_Create */
		Body: DevKit.FormBookableResourceCharacteristic_Quick_Create.Body;
	}
	namespace FormQuick_create_bookable_resource_form {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Choose the characteristic to associate with the resource. */
			Characteristic: DevKit.Controls.Lookup;
			/** Select a rating value that represents the evaluation of a characteristic for a particular resource. */
			RatingValue: DevKit.Controls.Lookup;
			/** Shows the resource associated with the characteristic. */
			Resource: DevKit.Controls.Lookup;
		}
	}
	class FormQuick_create_bookable_resource_form extends DevKit.IForm {
		/**
		* Quick create bookable resource form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Quick_create_bookable_resource_form */
		Body: DevKit.FormQuick_create_bookable_resource_form.Body;
	}
	class BookableResourceCharacteristicApi {
		/**
		* DynamicsCrm.DevKit BookableResourceCharacteristicApi
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
		/** Unique identifier of the resource characteristic. */
		BookableResourceCharacteristicId: string;
		/** Choose the characteristic to associate with the resource. */
		Characteristic: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Exchange rate for the currency associated with the bookableresourcecharacteristic with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Identifier of the characteristic */
		msdyn_CharacteristicSupportingInfoId: string;
		/** Description of the characteristic */
		msdyn_Description: string;
		/** Expiration date for the characteristic. */
		msdyn_ExpirationDate_TimezoneDateOnly: Date;
		/** Issue date for the characteristic. */
		msdyn_IssueDate_TimezoneDateOnly: Date;
		/** Type the name of the association between the resource and characteristic. */
		Name: string;
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
		/** Contains the id of the process associated with the entity. */
		ProcessId: string;
		/** Select a rating value that represents the evaluation of a characteristic for a particular resource. */
		RatingValue: string;
		/** Shows the resource associated with the characteristic. */
		Resource: string;
		/** Contains the id of the stage where the entity is located. */
		StageId: string;
		/** Status of the Bookable Resource Characteristic */
		StateCode: OptionSet.BookableResourceCharacteristic.StateCode;
		/** Reason for the status of the Bookable Resource Characteristic */
		StatusCode: OptionSet.BookableResourceCharacteristic.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Exchange rate for the currency associated with the BookableResourceCharacteristic with respect to the base currency. */
		TransactionCurrencyId: string;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the resource characteristic. */
			readonly BookableResourceCharacteristicId: string;
			/** Choose the characteristic to associate with the resource. */
			readonly Characteristic: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Exchange rate for the currency associated with the bookableresourcecharacteristic with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Identifier of the characteristic */
			readonly msdyn_CharacteristicSupportingInfoId: string;
			/** Description of the characteristic */
			readonly msdyn_Description: string;
			/** Expiration date for the characteristic. */
			readonly msdyn_ExpirationDate_TimezoneDateOnly: string;
			/** Issue date for the characteristic. */
			readonly msdyn_IssueDate_TimezoneDateOnly: string;
			/** Type the name of the association between the resource and characteristic. */
			readonly Name: string;
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
			/** Contains the id of the process associated with the entity. */
			readonly ProcessId: string;
			/** Select a rating value that represents the evaluation of a characteristic for a particular resource. */
			readonly RatingValue: string;
			/** Shows the resource associated with the characteristic. */
			readonly Resource: string;
			/** Contains the id of the stage where the entity is located. */
			readonly StageId: string;
			/** Status of the Bookable Resource Characteristic */
			readonly StateCode: string;
			/** Reason for the status of the Bookable Resource Characteristic */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Exchange rate for the currency associated with the BookableResourceCharacteristic with respect to the base currency. */
			readonly TransactionCurrencyId: string;
			/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace BookableResourceCharacteristic {
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
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