﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
//		Last Modified: 2024-12-05 15:47:33
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;
using System.Linq;
namespace Dev.DevKit.Shared.Entities.msdyn_ai_conversationtopic_conversationOptionSets
{

}
namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_ai_conversationtopic_conversation : EntityBase
	{
		public struct Fields
		{
			public const string msdyn_ai_conversationtopic_conversationId = "msdyn_ai_conversationtopic_conversationid";
			public const string msdyn_conversationid = "msdyn_conversationid";
			public const string msdyn_conversationtopicid = "msdyn_conversationtopicid";
			public const string msdyn_language = "msdyn_language";
			public const string msdyn_name = "msdyn_name";
		}
		public const string EntityLogicalName = "msdyn_ai_conversationtopic_conversation";
		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 11580;
		public const string EntityCollectionSchemaName = "msdyn_ai_conversationtopic_conversations";
		public const string EntityDisplayCollectionName = "ai_conversationtopic_conversations";
		public const string DisplayName = "ai_conversationtopic_conversation";
		public const string EntitySetName = "msdyn_ai_conversationtopic_conversations";
		public const string EntityLogicalCollectionName = "msdyn_ai_conversationtopic_conversations";
		public const string EntityPrimaryIdAttribute = "msdyn_ai_conversationtopic_conversationid";
		public const string EntityPrimaryImageAttribute = "";
		public const string EntityPrimaryNameAttribute = "msdyn_name";
		public const string EntitySchemaName = "msdyn_ai_conversationtopic_conversation";
		[DebuggerNonUserCode()]
		public msdyn_ai_conversationtopic_conversation()
		{
			Entity = new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_ai_conversationtopic_conversation(Guid msdyn_ai_conversationtopic_conversationId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_ai_conversationtopic_conversationId);
			PreEntity = CloneThisEntity(Entity);
		}
		[DebuggerNonUserCode()]
		public msdyn_ai_conversationtopic_conversation(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_ai_conversationtopic_conversation"/> with <paramref name="targetEntity"/>.
		/// </summary>
		[DebuggerNonUserCode()]
		public msdyn_ai_conversationtopic_conversation(Entity targetEntity)
		{
			Entity = targetEntity ?? new Entity(EntityLogicalName, Guid.Empty);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// Instance new late bound class <see cref="msdyn_ai_conversationtopic_conversation"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_ai_conversationtopic_conversation(Entity preEntity, Entity targetEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_ai_conversationtopic_conversation(preEntity, targetEntity) with targetEntity = null");
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
		/// Instance new late bound class <see cref="msdyn_ai_conversationtopic_conversation"/> with <paramref name="preEntity"/>. Then copy all attributes from <paramref name="targetEntity"/> to <paramref name="preEntity"/>. After that copy all attributes from <paramref name="postEntity"/> to the last result. Existing attribute will be overwritten.
		/// </summary>
		/// <exception cref="InvalidPluginExecutionException">when <paramref name="targetEntity"/> is null.</exception>
		[DebuggerNonUserCode()]
		public msdyn_ai_conversationtopic_conversation(Entity preEntity, Entity targetEntity, Entity postEntity)
		{
			if (targetEntity == null) throw new InvalidPluginExecutionException($"new msdyn_ai_conversationtopic_conversation(preEntity, targetEntity, postEntity) with targetEntity = null");
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
		public msdyn_ai_conversationtopic_conversation(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: ai_conversationtopic_conversation</para>
		/// <para><strong>Description</strong>: Unique identifier for entity instances</para>
		/// <para><strong>Primary Key</strong>: <strong>Uniqueidentifier</strong></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_ai_conversationtopic_conversationId
		{
			get { return Id; }
			set
			{
				Entity.Attributes[Fields.msdyn_ai_conversationtopic_conversationId] = value;
				Entity.Id = value;
			}
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: conversationid</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_conversationid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_conversationid); }
			set { Entity.Attributes[Fields.msdyn_conversationid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: conversationtopicid</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_conversationtopicid
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_conversationtopicid); }
			set { Entity.Attributes[Fields.msdyn_conversationtopicid] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: language</para>
		/// <para><strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_language
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_language); }
			set { Entity.Attributes[Fields.msdyn_language] = value; }
		}
		/// <summary>
		/// <para><strong>Display Name</strong>: Name</para>
		/// <para><strong>Description</strong>: The name of the custom entity.</para>
		/// <para><strong>Primary Name</strong>: Required - <strong>Single Line of Text</strong> - <strong>MaxLength</strong>: 100</para>
		/// </summary>
		[DebuggerNonUserCode()]
		public string msdyn_name
		{
			get { return Entity.GetAttributeValue<string>(Fields.msdyn_name); }
			set { Entity.Attributes[Fields.msdyn_name] = value; }
		}
	}
}