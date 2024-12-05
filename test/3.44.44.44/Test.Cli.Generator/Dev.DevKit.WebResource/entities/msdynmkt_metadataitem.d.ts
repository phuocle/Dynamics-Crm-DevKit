//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_metadataitem_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdynmkt_metadataitem_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_metadataitem_Information */
		Body: DevKit.Formmsdynmkt_metadataitem_Information.Body;
		/** The Navigation of form msdynmkt_metadataitem_Information */
		Navigation: DevKit.Formmsdynmkt_metadataitem_Information.Navigation;
		/** The SidePanes of form msdynmkt_metadataitem_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_metadataitemApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_metadataitemApi
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
		msdynmkt_DataType: OptionSet.msdynmkt_metadataitem.msdynmkt_DataType;
		msdynmkt_DateTimeBehavior: OptionSet.msdynmkt_metadataitem.msdynmkt_DateTimeBehavior;
		msdynmkt_DisplayName: string;
		msdynmkt_FullMetadataAsJSON: string;
		msdynmkt_IconPath: string;
		msdynmkt_IsRequired: boolean;
		msdynmkt_IsSecured: boolean;
		msdynmkt_LanguageCode: number;
		msdynmkt_LogicalName: string;
		/** Unique identifier for entity instances */
		msdynmkt_metadataitemId: string;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		msdynmkt_NativeId: string;
		msdynmkt_NavigationPathsAsJSON: string;
		msdynmkt_ReferencedSourcesAsJSON: string;
		msdynmkt_SourceDisplayName: string;
		msdynmkt_SourceIsVirtual: boolean;
		msdynmkt_SourceLogicalName: string;
		msdynmkt_SourcePrimaryId: string;
		msdynmkt_SourceSetName: string;
		msdynmkt_SourceType: OptionSet.msdynmkt_metadataitem.msdynmkt_SourceType;
		msdynmkt_SourceVirtualTableType: OptionSet.msdynmkt_metadataitem.msdynmkt_SourceVirtualTableType;
		msdynmkt_StringFormatType: OptionSet.msdynmkt_metadataitem.msdynmkt_StringFormatType;
		msdynmkt_TargetAudience: string;
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
		/** Status of the Metadata Item */
		statecode: OptionSet.msdynmkt_metadataitem.statecode;
		/** Reason for the status of the Metadata Item */
		statuscode: OptionSet.msdynmkt_metadataitem.statuscode;
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
			readonly msdynmkt_DataType: string;
			readonly msdynmkt_DateTimeBehavior: string;
			readonly msdynmkt_DisplayName: string;
			readonly msdynmkt_FullMetadataAsJSON: string;
			readonly msdynmkt_IconPath: string;
			readonly msdynmkt_IsRequired: string;
			readonly msdynmkt_IsSecured: string;
			readonly msdynmkt_LanguageCode: string;
			readonly msdynmkt_LogicalName: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_metadataitemId: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			readonly msdynmkt_NativeId: string;
			readonly msdynmkt_NavigationPathsAsJSON: string;
			readonly msdynmkt_ReferencedSourcesAsJSON: string;
			readonly msdynmkt_SourceDisplayName: string;
			readonly msdynmkt_SourceIsVirtual: string;
			readonly msdynmkt_SourceLogicalName: string;
			readonly msdynmkt_SourcePrimaryId: string;
			readonly msdynmkt_SourceSetName: string;
			readonly msdynmkt_SourceType: string;
			readonly msdynmkt_SourceVirtualTableType: string;
			readonly msdynmkt_StringFormatType: string;
			readonly msdynmkt_TargetAudience: string;
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
			/** Status of the Metadata Item */
			readonly statecode: string;
			/** Reason for the status of the Metadata Item */
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
	namespace msdynmkt_metadataitem {
		enum msdynmkt_DataType {
			/** 534120000 */
			BigInt,
			/** 534120015 */
			Boolean,
			/** 534120002 */
			DateTime,
			/** 534120003 */
			Decimal,
			/** 534120007 */
			Double,
			/** 534120020 */
			EntityCollection,
			/** 534120019 */
			EntityValue,
			/** 534120006 */
			File,
			/** 534120008 */
			Image,
			/** 534120004 */
			Integer,
			/** 534120009 */
			Lookup,
			/** 534120018 */
			ManyToManyRelationship,
			/** 534120022 */
			ManyToOneRelationship,
			/** 534120011 */
			Memo,
			/** 534120001 */
			Money,
			/** 534120010 */
			MultiSelectPicklist,
			/** 534120017 */
			OneToManyRelationship,
			/** 534120021 */
			Other,
			/** 534120012 */
			Picklist,
			/** 534120014 */
			State,
			/** 534120013 */
			Status,
			/** 534120005 */
			String,
			/** 534120016 */
			Uniqueidentifier
		}
		enum msdynmkt_DateTimeBehavior {
			/** 534120001 */
			DateOnly,
			/** 534120000 */
			TimeZoneIndependent,
			/** 534120002 */
			UserLocal
		}
		enum msdynmkt_SourceType {
			/** 534120002 */
			CJO_Business_Event,
			/** 534120003 */
			CJO_Custom_Event,
			/** 534120001 */
			CJO_Interaction_Event,
			/** 534120000 */
			Dataverse_Table,
			/** 534120005 */
			External,
			/** 534120004 */
			Legal
		}
		enum msdynmkt_SourceVirtualTableType {
			/** 534120001 */
			Elastic,
			/** 534120000 */
			None,
			/** 534120002 */
			Other
		}
		enum msdynmkt_StringFormatType {
			/** 534120000 */
			Email,
			/** 534120008 */
			Json,
			/** 534120007 */
			Phone,
			/** 534120005 */
			PhoneticGuide,
			/** 534120009 */
			RichText,
			/** 534120001 */
			Text,
			/** 534120002 */
			TextArea,
			/** 534120004 */
			TickerSymbol,
			/** 534120003 */
			Url,
			/** 534120006 */
			VersionNumber
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}