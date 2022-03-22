//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ActionCardApi {
		/**
		* DynamicsCrm.DevKit ActionCardApi
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
		/** Unique identifier of the action card. */
		ActionCardId: string;
		/** The CardType ENUM value. */
		CardType: number;
		/** Unique identifier of the card type. */
		CardTypeId: string;
		/** Unique identifier of the user who created the action card. */
		readonly CreatedBy: string;
		/** Date and time when action card was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the action card. */
		readonly CreatedOnBehalfBy: string;
		/** Json formatted string for generic purpose. */
		Data: string;
		/** Card Description */
		Description: string;
		/** Exchange rate for the currency associated with the action card with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Shows the Expiry Date */
		ExpiryDate_UtcDateAndTime: Date;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who last modified the action card. */
		readonly ModifiedBy: string;
		/** Date and time when action card was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified action card. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_actioncardregardingid: string;
		msdyn_regardingobjectid: string;
		msdyn_regardingobjectlogicalname: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the action card. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the action card. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the action card. */
		readonly OwningUser: string;
		/** Json formatted string for parent regarding object. */
		ParentRegardingObjectIdData: string;
		/** Priority of the ActionCard */
		Priority: number;
		/** RecordIdObjectTypeCode2 of the ActionCard */
		RecordIdObjectTypeCode2: number;
		/** For internal use only. */
		ReferenceTokens: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_account_actioncard: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_appointment_actioncard: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_chat: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_contact_actioncard: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_email_actioncard: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_fax_actioncard: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_incident_actioncard: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_lead_actioncard: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_letter_actioncard: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_msdyn_approval: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_msdyn_bookingalert: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_msdyn_ocliveworkitem: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_msdyn_ocoutboundmessage: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_msdyn_ocsession: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_msfp_alert: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_msfp_surveyinvite: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_msfp_surveyresponse: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_opportunity_actioncard: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_phonecall_actioncard: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_recurringappointmentmaster_actioncard: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_serviceappointment_actioncard: string;
		/** Choose the record that the card relates to. */
		regardingobjectid_task_actioncard: string;
		/** Source for the Action Card */
		Source: OptionSet.ActionCard.Source;
		/** Shows the Start Date */
		StartDate_UtcDateAndTime: Date;
		/** State of the Action Card */
		State: OptionSet.ActionCard.State;
		/** Title of the ActionCard */
		Title: string;
		/** Unique identifier of the currency associated with the action card. */
		TransactionCurrencyId: string;
		/** Version number of the action card. */
		readonly VersionNumber: number;
		/** Select whether the visibility should be set to public/private. */
		Visibility: boolean;
	}
}
declare namespace OptionSet {
	namespace ActionCard {
		enum Source {
			/** 1 */
			CRM,
			/** 2 */
			Exchange
		}
		enum State {
			/** 0 */
			Active,
			/** 2 */
			Completed,
			/** 1 */
			Dismissed
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}