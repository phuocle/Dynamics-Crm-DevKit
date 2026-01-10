//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class DependencyNodeApi {
		/**
		* DynamicsCrm.DevKit DependencyNodeApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier of the user who created the solution */
		readonly BaseSolutionId: string | null;
		/** The type code of the component. */
		readonly ComponentType: OptionSet.DependencyNode.ComponentType | null;
		/** Unique identifier of the dependency node. */
		readonly DependencyNodeId: string | null;
		/** Introduced version for the component */
		IntroducedVersion: number | null;
		/** Whether this component is shared by two solutions with the same publisher. */
		readonly IsSharedComponent: boolean | null;
		/** Unique identifier of the object with which the node is associated. */
		ObjectId: string | null;
		/** Unique identifier of the parent entity. */
		readonly ParentId: string | null;
		/** Unique identifier of the top solution. */
		readonly TopSolutionId: string | null;
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the user who created the solution */
			readonly BaseSolutionId: string;
			/** The type code of the component. */
			readonly ComponentType: string;
			/** Unique identifier of the dependency node. */
			readonly DependencyNodeId: string;
			/** Introduced version for the component */
			readonly IntroducedVersion: string;
			/** Whether this component is shared by two solutions with the same publisher. */
			readonly IsSharedComponent: string;
			/** Unique identifier of the object with which the node is associated. */
			readonly ObjectId: string;
			/** Unique identifier of the parent entity. */
			readonly ParentId: string;
			/** Unique identifier of the top solution. */
			readonly TopSolutionId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace DependencyNode {
		enum ComponentType {
			/** AI_Configuration = 402*/
			AI_Configuration = 402,
			/** AI_Project = 401*/
			AI_Project = 401,
			/** AI_Project_Type = 400*/
			AI_Project_Type = 400,
			/** Attachment = 35*/
			Attachment = 35,
			/** Attribute = 2*/
			Attribute = 2,
			/** Attribute_Image_Configuration = 431*/
			Attribute_Image_Configuration = 431,
			/** Attribute_Lookup_Value = 5*/
			Attribute_Lookup_Value = 5,
			/** Attribute_Map = 47*/
			Attribute_Map = 47,
			/** Attribute_Picklist_Value = 4*/
			Attribute_Picklist_Value = 4,
			/** Canvas_App = 300*/
			Canvas_App = 300,
			/** Complex_Control = 64*/
			Complex_Control = 64,
			/** Connection_Role = 63*/
			Connection_Role = 63,
			/** Connector_371 = 371*/
			Connector_371 = 371,
			/** Connector_372 = 372*/
			Connector_372 = 372,
			/** Contract_Template = 37*/
			Contract_Template = 37,
			/** Convert_Rule = 154*/
			Convert_Rule = 154,
			/** Convert_Rule_Item = 155*/
			Convert_Rule_Item = 155,
			/** Custom_Control = 66*/
			Custom_Control = 66,
			/** Custom_Control_Default_Config = 68*/
			Custom_Control_Default_Config = 68,
			/** Data_Source_Mapping = 166*/
			Data_Source_Mapping = 166,
			/** Display_String = 22*/
			Display_String = 22,
			/** Display_String_Map = 23*/
			Display_String_Map = 23,
			/** Duplicate_Rule = 44*/
			Duplicate_Rule = 44,
			/** Duplicate_Rule_Condition = 45*/
			Duplicate_Rule_Condition = 45,
			/** Email_Template = 36*/
			Email_Template = 36,
			/** Entity = 1*/
			Entity = 1,
			/** Entity_Analytics_Configuration = 430*/
			Entity_Analytics_Configuration = 430,
			/** Entity_Image_Configuration = 432*/
			Entity_Image_Configuration = 432,
			/** Entity_Key = 14*/
			Entity_Key = 14,
			/** Entity_Map = 46*/
			Entity_Map = 46,
			/** Entity_Relationship = 10*/
			Entity_Relationship = 10,
			/** Entity_Relationship_Relationships = 12*/
			Entity_Relationship_Relationships = 12,
			/** Entity_Relationship_Role = 11*/
			Entity_Relationship_Role = 11,
			/** Environment_Variable_Definition = 380*/
			Environment_Variable_Definition = 380,
			/** Environment_Variable_Value = 381*/
			Environment_Variable_Value = 381,
			/** Field_Permission = 71*/
			Field_Permission = 71,
			/** Field_Security_Profile = 70*/
			Field_Security_Profile = 70,
			/** Form = 24*/
			Form = 24,
			/** Hierarchy_Rule = 65*/
			Hierarchy_Rule = 65,
			/** Import_Map = 208*/
			Import_Map = 208,
			/** Index = 18*/
			Index = 18,
			/** KB_Article_Template = 38*/
			KB_Article_Template = 38,
			/** Localized_Label = 7*/
			Localized_Label = 7,
			/** Mail_Merge_Template = 39*/
			Mail_Merge_Template = 39,
			/** Managed_Property = 13*/
			Managed_Property = 13,
			/** Mobile_Offline_Profile = 161*/
			Mobile_Offline_Profile = 161,
			/** Mobile_Offline_Profile_Item = 162*/
			Mobile_Offline_Profile_Item = 162,
			/** Option_Set = 9*/
			Option_Set = 9,
			/** Organization = 25*/
			Organization = 25,
			/** Plugin_Assembly = 91*/
			Plugin_Assembly = 91,
			/** Plugin_Type = 90*/
			Plugin_Type = 90,
			/** Privilege = 16*/
			Privilege = 16,
			/** PrivilegeObjectTypeCode = 17*/
			PrivilegeObjectTypeCode = 17,
			/** Relationship = 3*/
			Relationship = 3,
			/** Relationship_Extra_Condition = 8*/
			Relationship_Extra_Condition = 8,
			/** Report = 31*/
			Report = 31,
			/** Report_Category = 33*/
			Report_Category = 33,
			/** Report_Entity = 32*/
			Report_Entity = 32,
			/** Report_Visibility = 34*/
			Report_Visibility = 34,
			/** Ribbon_Command = 48*/
			Ribbon_Command = 48,
			/** Ribbon_Context_Group = 49*/
			Ribbon_Context_Group = 49,
			/** Ribbon_Customization = 50*/
			Ribbon_Customization = 50,
			/** Ribbon_Diff = 55*/
			Ribbon_Diff = 55,
			/** Ribbon_Rule = 52*/
			Ribbon_Rule = 52,
			/** Ribbon_Tab_To_Command_Map = 53*/
			Ribbon_Tab_To_Command_Map = 53,
			/** Role = 20*/
			Role = 20,
			/** Role_Privilege = 21*/
			Role_Privilege = 21,
			/** Routing_Rule = 150*/
			Routing_Rule = 150,
			/** Routing_Rule_Item = 151*/
			Routing_Rule_Item = 151,
			/** Saved_Query = 26*/
			Saved_Query = 26,
			/** Saved_Query_Visualization = 59*/
			Saved_Query_Visualization = 59,
			/** SDK_Message_Processing_Step = 92*/
			SDK_Message_Processing_Step = 92,
			/** SDK_Message_Processing_Step_Image = 93*/
			SDK_Message_Processing_Step_Image = 93,
			/** SDKMessage = 201*/
			SDKMessage = 201,
			/** SDKMessageFilter = 202*/
			SDKMessageFilter = 202,
			/** SdkMessagePair = 203*/
			SdkMessagePair = 203,
			/** SdkMessageRequest = 204*/
			SdkMessageRequest = 204,
			/** SdkMessageRequestField = 205*/
			SdkMessageRequestField = 205,
			/** SdkMessageResponse = 206*/
			SdkMessageResponse = 206,
			/** SdkMessageResponseField = 207*/
			SdkMessageResponseField = 207,
			/** Service_Endpoint = 95*/
			Service_Endpoint = 95,
			/** Similarity_Rule = 165*/
			Similarity_Rule = 165,
			/** Site_Map = 62*/
			Site_Map = 62,
			/** SLA = 152*/
			SLA = 152,
			/** SLA_Item = 153*/
			SLA_Item = 153,
			/** System_Form = 60*/
			System_Form = 60,
			/** View_Attribute = 6*/
			View_Attribute = 6,
			/** Web_Resource = 61*/
			Web_Resource = 61,
			/** WebWizard = 210*/
			WebWizard = 210,
			/** Workflow = 29*/
			Workflow = 29
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}