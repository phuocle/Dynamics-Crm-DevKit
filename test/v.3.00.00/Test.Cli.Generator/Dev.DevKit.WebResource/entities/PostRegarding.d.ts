//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class PostRegardingApi {
		/**
		* DynamicsCrm.DevKit PostRegardingApi
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
		/** Date of Latest Auto Post on the Regarding entity */
		readonly LatestAutoPostModifiedOn_UtcDateAndTime: Date;
		/** Date of Latest Manual Post on the Regarding entity */
		readonly LatestManualPostModifiedOn_UtcDateAndTime: Date;
		/** Shows the ID of the record that the post is referring to. */
		PostRegardingId: string;
		/** Choose the record that the post relates to. */
		regardingobjectid_account: string;
		/** Choose the record that the post relates to. */
		regardingobjectid_appointment: string;
		/** Choose the record that the post relates to. */
		regardingobjectid_competitor: string;
		/** Choose the record that the post relates to. */
		regardingobjectid_contact: string;
		/** Choose the record that the post relates to. */
		regardingobjectid_externalparty: string;
		/** Choose the record that the post relates to. */
		regardingobjectid_incident: string;
		/** Choose the record that the post relates to. */
		regardingobjectid_knowledgearticle: string;
		/** Choose the record that the post relates to. */
		regardingobjectid_lead: string;
		/** Choose the record that the post relates to. */
		regardingobjectid_opportunity: string;
		/** Choose the record that the post relates to. */
		regardingobjectid_phonecall: string;
		/** Choose the record that the post relates to. */
		regardingobjectid_processsession: string;
		/** Choose the record that the post relates to. */
		regardingobjectid_queue: string;
		/** Choose the record that the post relates to. */
		regardingobjectid_recurringappointmentmaster: string;
		/** Choose the record that the post relates to. */
		regardingobjectid_systemuser: string;
		/** Choose the record that the post relates to. */
		regardingobjectid_task: string;
		/** Choose the record that the post relates to. */
		regardingobjectid_team: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Select the business unit that owns the regarding object. */
		readonly RegardingObjectOwningBusinessUnit: string;
	}
}
declare namespace OptionSet {
	namespace PostRegarding {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}