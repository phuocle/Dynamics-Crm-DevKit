﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_sequencetemplate_Information {
		interface Tabs {
		}
		interface Body {
			/** Sequence definition Old */
			msdyn_definition: DevKit.Controls.String;
			/** Sequence definition */
			msdyn_definitionnew: DevKit.Controls.String;
			/** Description */
			msdyn_description: DevKit.Controls.String;
			msdyn_language: DevKit.Controls.OptionSet;
			/** Maximum number of days to complete the sequence */
			msdyn_maxduration: DevKit.Controls.String;
			/** The max step count for the sequence. */
			msdyn_maxstepcount: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_sequencetemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_sequencetemplate_Information */
		Body: DevKit.Formmsdyn_sequencetemplate_Information.Body;
		/** The Process of form msdyn_sequencetemplate_Information */
		Process: DevKit.Formmsdyn_sequencetemplate_Information.Process;
		/** The SidePanes of form msdyn_sequencetemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_sequencetemplateApi {
		/**
		* DynamicsCrm.DevKit msdyn_sequencetemplateApi
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
		/** CJO Definition Old */
		msdyn_cjodefinition: string;
		/** CJO Definition */
		msdyn_cjodefinitionnew: string;
		/** Sequence definition Old */
		msdyn_definition: string;
		/** Sequence definition */
		msdyn_definitionnew: string;
		/** Description */
		msdyn_description: string;
		msdyn_language: OptionSet.msdyn_sequencetemplate.msdyn_language;
		/** Maximum number of days to complete the sequence */
		msdyn_maxduration: string;
		/** The max step count for the sequence. */
		msdyn_maxstepcount: number;
		/** Maximum number of days to complete the sequence */
		msdyn_maxstepcounttext: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** The display name information about record to which this sequence could be associated */
		msdyn_prefferedregardingentitydisplayname: string;
		/** The logical name of regarding entity */
		msdyn_prefferedregardingEntityName: string;
		/** Unique identifier for entity instances */
		msdyn_sequencetemplateId: string;
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
		/** Status of the Sequence Template */
		statecode: OptionSet.msdyn_sequencetemplate.statecode;
		/** Reason for the status of the Sequence Template */
		statuscode: OptionSet.msdyn_sequencetemplate.statuscode;
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
			/** CJO Definition Old */
			readonly msdyn_cjodefinition: string;
			/** CJO Definition */
			readonly msdyn_cjodefinitionnew: string;
			/** Sequence definition Old */
			readonly msdyn_definition: string;
			/** Sequence definition */
			readonly msdyn_definitionnew: string;
			/** Description */
			readonly msdyn_description: string;
			readonly msdyn_language: string;
			/** Maximum number of days to complete the sequence */
			readonly msdyn_maxduration: string;
			/** The max step count for the sequence. */
			readonly msdyn_maxstepcount: string;
			/** Maximum number of days to complete the sequence */
			readonly msdyn_maxstepcounttext: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** The display name information about record to which this sequence could be associated */
			readonly msdyn_prefferedregardingentitydisplayname: string;
			/** The logical name of regarding entity */
			readonly msdyn_prefferedregardingEntityName: string;
			/** Unique identifier for entity instances */
			readonly msdyn_sequencetemplateId: string;
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
			/** Status of the Sequence Template */
			readonly statecode: string;
			/** Reason for the status of the Sequence Template */
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
	namespace msdyn_sequencetemplate {
		enum msdyn_language {
			/** 1025 */
			Arabic_Saudi_Arabia,
			/** 1069 */
			Basque_Spain,
			/** 1026 */
			Bulgarian_Bulgaria,
			/** 1027 */
			Catalan_Spain,
			/** 2052 */
			Chinese_China,
			/** 3076 */
			Chinese_Hong_Kong,
			/** 1028 */
			Chinese_Traditional,
			/** 1050 */
			Croatian_Croatia,
			/** 1029 */
			Czech_Czech_Republic,
			/** 1030 */
			Danish_Denmark,
			/** 1043 */
			Dutch_Netherlands,
			/** 1033 */
			English_United_States,
			/** 1061 */
			Estonian_Estonia,
			/** 1035 */
			Finnish_Finland,
			/** 1036 */
			French_France,
			/** 1110 */
			Galician_Spain,
			/** 1031 */
			German_Germany,
			/** 1032 */
			Greek_Greece,
			/** 1037 */
			Hebrew_Israel,
			/** 1081 */
			Hindi_India,
			/** 1038 */
			Hungarian_Hungary,
			/** 1057 */
			Indonesian_Indonesia,
			/** 1040 */
			Italian_Italy,
			/** 1041 */
			Japanese_Japan,
			/** 1087 */
			Kazakh_Kazakhstan,
			/** 1042 */
			Korean_Korea,
			/** 1062 */
			Latvian_Latvia,
			/** 1063 */
			Lithuanian_Lithuania,
			/** 1086 */
			Malay_Malaysia,
			/** 1044 */
			Norwegian_Bokmal_Norway,
			/** 1045 */
			Polish_Poland,
			/** 1046 */
			Portuguese_Brazil,
			/** 2070 */
			Portuguese_Portugal,
			/** 1048 */
			Romanian_Romania,
			/** 1049 */
			Russian_Russia,
			/** 3098 */
			Serbian_Cyrillic_Serbia,
			/** 2074 */
			Serbian_Latin_Serbia,
			/** 1051 */
			Slovak_Slovakia,
			/** 1060 */
			Slovenian_Slovenia,
			/** 3082 */
			Spanish_Spain,
			/** 1053 */
			Swedish_Sweden,
			/** 1054 */
			Thai_Thailand,
			/** 1055 */
			Turkish_Turkey,
			/** 1058 */
			Ukrainian_Ukraine,
			/** 1066 */
			Vietnamese_Vietnam
		}
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}