﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class InvalidDependencyApi {
		/**
		* DynamicsCrm.DevKit InvalidDependencyApi
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
		/** Unique identifier of the object that has an invalid dependency */
		readonly ExistingComponentId: string;
		/** Component type of the object that has an invalid dependency */
		readonly ExistingComponentType: OptionSet.InvalidDependency.ExistingComponentType;
		/** The dependency type of the invalid dependency. */
		readonly ExistingDependencyType: OptionSet.InvalidDependency.ExistingDependencyType;
		/** Unique identifier of the invalid dependency. */
		readonly InvalidDependencyId: string;
		/** Indicates whether the existing node is the required component in the dependency */
		readonly IsExistingNodeRequiredComponent: boolean;
		/** Unique identifier of the missing component. */
		MissingComponentId: string;
		readonly MissingComponentInfo: string;
		/** The lookup type of the missing component. */
		readonly MissingComponentLookupType: number;
		/** The object type code of the missing component. */
		readonly MissingComponentType: OptionSet.InvalidDependency.MissingComponentType;
		readonly FormattedValue: {
			/** Unique identifier of the object that has an invalid dependency */
			readonly ExistingComponentId: string;
			/** Component type of the object that has an invalid dependency */
			readonly ExistingComponentType: string;
			/** The dependency type of the invalid dependency. */
			readonly ExistingDependencyType: string;
			/** Unique identifier of the invalid dependency. */
			readonly InvalidDependencyId: string;
			/** Indicates whether the existing node is the required component in the dependency */
			readonly IsExistingNodeRequiredComponent: string;
			/** Unique identifier of the missing component. */
			readonly MissingComponentId: string;
			readonly MissingComponentInfo: string;
			/** The lookup type of the missing component. */
			readonly MissingComponentLookupType: string;
			/** The object type code of the missing component. */
			readonly MissingComponentType: string;
		}
	}
}
declare namespace OptionSet {
	namespace InvalidDependency {
		enum ExistingComponentType {
			/** 402 */
			AI_Configuration,
			/** 401 */
			AI_Project,
			/** 400 */
			AI_Project_Type,
			/** 35 */
			Attachment,
			/** 2 */
			Attribute,
			/** 431 */
			Attribute_Image_Configuration,
			/** 5 */
			Attribute_Lookup_Value,
			/** 47 */
			Attribute_Map,
			/** 4 */
			Attribute_Picklist_Value,
			/** 300 */
			Canvas_App,
			/** 64 */
			Complex_Control,
			/** 63 */
			Connection_Role,
			/** 371 */
			Connector_371,
			/** 372 */
			Connector_372,
			/** 37 */
			Contract_Template,
			/** 154 */
			Convert_Rule,
			/** 155 */
			Convert_Rule_Item,
			/** 66 */
			Custom_Control,
			/** 68 */
			Custom_Control_Default_Config,
			/** 166 */
			Data_Source_Mapping,
			/** 22 */
			Display_String,
			/** 23 */
			Display_String_Map,
			/** 44 */
			Duplicate_Rule,
			/** 45 */
			Duplicate_Rule_Condition,
			/** 36 */
			Email_Template,
			/** 1 */
			Entity,
			/** 430 */
			Entity_Analytics_Configuration,
			/** 432 */
			Entity_Image_Configuration,
			/** 14 */
			Entity_Key,
			/** 46 */
			Entity_Map,
			/** 10 */
			Entity_Relationship,
			/** 12 */
			Entity_Relationship_Relationships,
			/** 11 */
			Entity_Relationship_Role,
			/** 380 */
			Environment_Variable_Definition,
			/** 381 */
			Environment_Variable_Value,
			/** 71 */
			Field_Permission,
			/** 70 */
			Field_Security_Profile,
			/** 24 */
			Form,
			/** 65 */
			Hierarchy_Rule,
			/** 208 */
			Import_Map,
			/** 18 */
			Index,
			/** 38 */
			KB_Article_Template,
			/** 7 */
			Localized_Label,
			/** 39 */
			Mail_Merge_Template,
			/** 13 */
			Managed_Property,
			/** 161 */
			Mobile_Offline_Profile,
			/** 162 */
			Mobile_Offline_Profile_Item,
			/** 9 */
			Option_Set,
			/** 25 */
			Organization,
			/** 91 */
			Plugin_Assembly,
			/** 90 */
			Plugin_Type,
			/** 16 */
			Privilege,
			/** 17 */
			PrivilegeObjectTypeCode,
			/** 3 */
			Relationship,
			/** 8 */
			Relationship_Extra_Condition,
			/** 31 */
			Report,
			/** 33 */
			Report_Category,
			/** 32 */
			Report_Entity,
			/** 34 */
			Report_Visibility,
			/** 48 */
			Ribbon_Command,
			/** 49 */
			Ribbon_Context_Group,
			/** 50 */
			Ribbon_Customization,
			/** 55 */
			Ribbon_Diff,
			/** 52 */
			Ribbon_Rule,
			/** 53 */
			Ribbon_Tab_To_Command_Map,
			/** 20 */
			Role,
			/** 21 */
			Role_Privilege,
			/** 150 */
			Routing_Rule,
			/** 151 */
			Routing_Rule_Item,
			/** 26 */
			Saved_Query,
			/** 59 */
			Saved_Query_Visualization,
			/** 92 */
			SDK_Message_Processing_Step,
			/** 93 */
			SDK_Message_Processing_Step_Image,
			/** 201 */
			SDKMessage,
			/** 202 */
			SDKMessageFilter,
			/** 203 */
			SdkMessagePair,
			/** 204 */
			SdkMessageRequest,
			/** 205 */
			SdkMessageRequestField,
			/** 206 */
			SdkMessageResponse,
			/** 207 */
			SdkMessageResponseField,
			/** 95 */
			Service_Endpoint,
			/** 165 */
			Similarity_Rule,
			/** 62 */
			Site_Map,
			/** 152 */
			SLA,
			/** 153 */
			SLA_Item,
			/** 60 */
			System_Form,
			/** 6 */
			View_Attribute,
			/** 61 */
			Web_Resource,
			/** 210 */
			WebWizard,
			/** 29 */
			Workflow
		}
		enum ExistingDependencyType {
			/** 0 */
			None,
			/** 2 */
			Published,
			/** 1 */
			Solution_Internal,
			/** 4 */
			Unpublished
		}
		enum MissingComponentType {
			/** 402 */
			AI_Configuration,
			/** 401 */
			AI_Project,
			/** 400 */
			AI_Project_Type,
			/** 35 */
			Attachment,
			/** 2 */
			Attribute,
			/** 431 */
			Attribute_Image_Configuration,
			/** 5 */
			Attribute_Lookup_Value,
			/** 47 */
			Attribute_Map,
			/** 4 */
			Attribute_Picklist_Value,
			/** 300 */
			Canvas_App,
			/** 64 */
			Complex_Control,
			/** 63 */
			Connection_Role,
			/** 371 */
			Connector_371,
			/** 372 */
			Connector_372,
			/** 37 */
			Contract_Template,
			/** 154 */
			Convert_Rule,
			/** 155 */
			Convert_Rule_Item,
			/** 66 */
			Custom_Control,
			/** 68 */
			Custom_Control_Default_Config,
			/** 166 */
			Data_Source_Mapping,
			/** 22 */
			Display_String,
			/** 23 */
			Display_String_Map,
			/** 44 */
			Duplicate_Rule,
			/** 45 */
			Duplicate_Rule_Condition,
			/** 36 */
			Email_Template,
			/** 1 */
			Entity,
			/** 430 */
			Entity_Analytics_Configuration,
			/** 432 */
			Entity_Image_Configuration,
			/** 14 */
			Entity_Key,
			/** 46 */
			Entity_Map,
			/** 10 */
			Entity_Relationship,
			/** 12 */
			Entity_Relationship_Relationships,
			/** 11 */
			Entity_Relationship_Role,
			/** 380 */
			Environment_Variable_Definition,
			/** 381 */
			Environment_Variable_Value,
			/** 71 */
			Field_Permission,
			/** 70 */
			Field_Security_Profile,
			/** 24 */
			Form,
			/** 65 */
			Hierarchy_Rule,
			/** 208 */
			Import_Map,
			/** 18 */
			Index,
			/** 38 */
			KB_Article_Template,
			/** 7 */
			Localized_Label,
			/** 39 */
			Mail_Merge_Template,
			/** 13 */
			Managed_Property,
			/** 161 */
			Mobile_Offline_Profile,
			/** 162 */
			Mobile_Offline_Profile_Item,
			/** 9 */
			Option_Set,
			/** 25 */
			Organization,
			/** 91 */
			Plugin_Assembly,
			/** 90 */
			Plugin_Type,
			/** 16 */
			Privilege,
			/** 17 */
			PrivilegeObjectTypeCode,
			/** 3 */
			Relationship,
			/** 8 */
			Relationship_Extra_Condition,
			/** 31 */
			Report,
			/** 33 */
			Report_Category,
			/** 32 */
			Report_Entity,
			/** 34 */
			Report_Visibility,
			/** 48 */
			Ribbon_Command,
			/** 49 */
			Ribbon_Context_Group,
			/** 50 */
			Ribbon_Customization,
			/** 55 */
			Ribbon_Diff,
			/** 52 */
			Ribbon_Rule,
			/** 53 */
			Ribbon_Tab_To_Command_Map,
			/** 20 */
			Role,
			/** 21 */
			Role_Privilege,
			/** 150 */
			Routing_Rule,
			/** 151 */
			Routing_Rule_Item,
			/** 26 */
			Saved_Query,
			/** 59 */
			Saved_Query_Visualization,
			/** 92 */
			SDK_Message_Processing_Step,
			/** 93 */
			SDK_Message_Processing_Step_Image,
			/** 201 */
			SDKMessage,
			/** 202 */
			SDKMessageFilter,
			/** 203 */
			SdkMessagePair,
			/** 204 */
			SdkMessageRequest,
			/** 205 */
			SdkMessageRequestField,
			/** 206 */
			SdkMessageResponse,
			/** 207 */
			SdkMessageResponseField,
			/** 95 */
			Service_Endpoint,
			/** 165 */
			Similarity_Rule,
			/** 62 */
			Site_Map,
			/** 152 */
			SLA,
			/** 153 */
			SLA_Item,
			/** 60 */
			System_Form,
			/** 6 */
			View_Attribute,
			/** 61 */
			Web_Resource,
			/** 210 */
			WebWizard,
			/** 29 */
			Workflow
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