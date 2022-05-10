//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PostRoleApi {
		/**
		* DynamicsCrm.DevKit PostRoleApi
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
		/** Unique identifier of the organization associated with the solution. */
		readonly OrganizationId: string;
		/** Unique identifier of the post with which the post role is associated. */
		PostId: string;
		/** Unique identifier of the post role. */
		PostRoleId: string;
		/** Choose the record that the post role relates to. */
		regardingobjectid_account: string;
		/** Choose the record that the post role relates to. */
		regardingobjectid_appointment: string;
		/** Choose the record that the post role relates to. */
		regardingobjectid_competitor: string;
		/** Choose the record that the post role relates to. */
		regardingobjectid_contact: string;
		/** Choose the record that the post role relates to. */
		regardingobjectid_incident: string;
		/** Choose the record that the post role relates to. */
		regardingobjectid_knowledgearticle: string;
		/** Choose the record that the post role relates to. */
		regardingobjectid_lead: string;
		/** Choose the record that the post role relates to. */
		regardingobjectid_opportunity: string;
		/** Choose the record that the post role relates to. */
		regardingobjectid_phonecall: string;
		/** Choose the record that the post role relates to. */
		regardingobjectid_processsession: string;
		/** Choose the record that the post role relates to. */
		regardingobjectid_queue: string;
		/** Choose the record that the post role relates to. */
		regardingobjectid_recurringappointmentmaster: string;
		/** Choose the record that the post role relates to. */
		regardingobjectid_systemuser: string;
		/** Choose the record that the post role relates to. */
		regardingobjectid_task: string;
		/** Choose the record that the post role relates to. */
		regardingobjectid_team: string;
		/** Select the role type for the post. */
		Type: OptionSet.PostRole.Type;
		readonly FormattedValue: {
			/** Unique identifier of the organization associated with the solution. */
			readonly OrganizationId: string;
			/** Unique identifier of the post with which the post role is associated. */
			readonly PostId: string;
			/** Unique identifier of the post role. */
			readonly PostRoleId: string;
			/** Choose the record that the post role relates to. */
			readonly regardingobjectid_account: string;
			/** Choose the record that the post role relates to. */
			readonly regardingobjectid_appointment: string;
			/** Choose the record that the post role relates to. */
			readonly regardingobjectid_competitor: string;
			/** Choose the record that the post role relates to. */
			readonly regardingobjectid_contact: string;
			/** Choose the record that the post role relates to. */
			readonly regardingobjectid_incident: string;
			/** Choose the record that the post role relates to. */
			readonly regardingobjectid_knowledgearticle: string;
			/** Choose the record that the post role relates to. */
			readonly regardingobjectid_lead: string;
			/** Choose the record that the post role relates to. */
			readonly regardingobjectid_opportunity: string;
			/** Choose the record that the post role relates to. */
			readonly regardingobjectid_phonecall: string;
			/** Choose the record that the post role relates to. */
			readonly regardingobjectid_processsession: string;
			/** Choose the record that the post role relates to. */
			readonly regardingobjectid_queue: string;
			/** Choose the record that the post role relates to. */
			readonly regardingobjectid_recurringappointmentmaster: string;
			/** Choose the record that the post role relates to. */
			readonly regardingobjectid_systemuser: string;
			/** Choose the record that the post role relates to. */
			readonly regardingobjectid_task: string;
			/** Choose the record that the post role relates to. */
			readonly regardingobjectid_team: string;
			/** Select the role type for the post. */
			readonly Type: string;
		}
	}
}
declare namespace OptionSet {
	namespace PostRole {
		enum RegardingObjectTypeCode {
		}
		enum Type {
			/** 2 */
			Mentioning,
			/** 3 */
			Mentioning_And_Regarding,
			/** 1 */
			Regarding,
			/** 4 */
			Topic
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}