﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:48:33
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.msdyn_casesuggestionOptionSets
{

}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_casesuggestion : EntityBase
	{
		public struct Fields
		{
			public const string msdyn_additionalcontext = "msdyn_additionalcontext";
			public const string msdyn_casesuggestionId = "msdyn_casesuggestionid";
			public const string msdyn_confidencescore = "msdyn_confidencescore";
			public const string msdyn_keyphrases = "msdyn_keyphrases";
			public const string msdyn_name = "msdyn_name";
			public const string msdyn_rank = "msdyn_rank";
			public const string msdyn_suggestedentity = "msdyn_suggestedentity";
			public const string msdyn_suggestionforentitylogicalname = "msdyn_suggestionforentitylogicalname";
			public const string msdyn_suggestionforid = "msdyn_suggestionforid";
		}
		public const string EntityLogicalName = "msdyn_casesuggestion";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10871;
		public const string EntityCollectionSchemaName = "msdyn_casesuggestions";
		public const string EntityDisplayCollectionName = "Case Suggestions";
		public const string DisplayName = "Case Suggestion";
		public const string EntitySetName = "msdyn_casesuggestions";
		public const string EntityLogicalCollectionName = "msdyn_casesuggestions";
		public const string EntityPrimaryIdAttribute = "msdyn_casesuggestionid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msdyn_name";
		public const string EntitySchemaName = "msdyn_casesuggestion";
		[DebuggerNonUserCode()]
		public msdyn_casesuggestion()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_casesuggestion(Guid msdyn_casesuggestionId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_casesuggestionId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_casesuggestion(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_casesuggestion"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdyn_casesuggestion(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_casesuggestion"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_casesuggestion(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_casesuggestion(preEntity, targetEntity) with targetEntity = null");
			if (preEntity == null) preEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			Entity = CloneThisEntity(preEntity);
			foreach (var property in targetEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_casesuggestion"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_casesuggestion(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_casesuggestion(preEntity, targetEntity, postEntity) with targetEntity = null");
			if (preEntity == null) preEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			if (postEntity == null) postEntity = new Entity(targetEntity.LogicalName, targetEntity.Id);
			Entity = CloneThisEntity(preEntity);
			foreach (var property in targetEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			foreach (var property in postEntity?.Attributes?.ToList())
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_casesuggestion(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Additional Context</para>
		/// <para><strong>Multiple Lines of Text</strong> - <strong>MaxLength</strong>: 10,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_additionalcontext
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_additionalcontext); }
			set { Entity.Attributes[Fields.msdyn_additionalcontext] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Case Suggestion</para>
		/// <para><strong>Description</strong>: Unique identifier for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_casesuggestionId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_casesuggestionId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Confidence Score</para>
		/// <para><strong>Floating Point Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public decimal? msdyn_confidencescore
		{
			get { return Entity.GetAttributeValue<decimal?>(Fields.msdyn_confidencescore); }
			set { Entity.Attributes[Fields.msdyn_confidencescore] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Key Phrases</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 2,000</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_keyphrases
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_keyphrases); }
			set { Entity.Attributes[Fields.msdyn_keyphrases] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Name</para>
		/// <para><strong>Description</strong>: The name of the custom entity.</para>
		/// <para><strong>Primary Name</strong>: <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_name); }
			set { Entity.Attributes[Fields.msdyn_name] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Rank</para>
		/// <para><strong>Whole Number</strong> - <strong>MinValue</strong>:  - <strong>MaxValue</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public int? msdyn_rank
		{
			get { return Entity.GetAttributeValue<int?>(Fields.msdyn_rank); }
			set { Entity.Attributes[Fields.msdyn_rank] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Suggested Case</para>
		/// <para><strong>Lookup</strong>: <see cref="incident"/></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public EntityReference msdyn_suggestedentity
		{
			get { return Entity.GetAttributeValue<EntityReference>(Fields.msdyn_suggestedentity); }
			set { Entity.Attributes[Fields.msdyn_suggestedentity] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: suggestion for entity  logical name</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 150</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_suggestionforentitylogicalname
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_suggestionforentitylogicalname); }
			set { Entity.Attributes[Fields.msdyn_suggestionforentitylogicalname] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: suggestion for entity id</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 50</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_suggestionforid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_suggestionforid); }
			set { Entity.Attributes[Fields.msdyn_suggestionforid] = value; }
		}
	}
}