﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Dev.DevKit.Shared.Entities.msdyn_msdyn_ocliveworkitem_knowledgebaserOptionSets
{

}

namespace Dev.DevKit.Shared.Entities
{
	[DebuggerNonUserCode()]
	public partial class msdyn_msdyn_ocliveworkitem_knowledgebaser : EntityBase
	{
		public struct Fields
		{
			public const string activityid = "activityid";
			public const string knowledgebaserecordid = "knowledgebaserecordid";
			public const string msdyn_msdyn_ocliveworkitem_knowledgebaserId = "msdyn_msdyn_ocliveworkitem_knowledgebaserid";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "msdyn_msdyn_ocliveworkitem_knowledgebaser";

		[System.Obsolete("This value is different for each instance. Please don't use it.")]
		public const int EntityTypeCode = 10744;

		[DebuggerNonUserCode()]
		public msdyn_msdyn_ocliveworkitem_knowledgebaser()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_msdyn_ocliveworkitem_knowledgebaser(Guid msdyn_msdyn_ocliveworkitem_knowledgebaserId)
		{
			Entity = new Entity(EntityLogicalName, msdyn_msdyn_ocliveworkitem_knowledgebaserId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_msdyn_ocliveworkitem_knowledgebaser(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_msdyn_ocliveworkitem_knowledgebaser(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_msdyn_ocliveworkitem_knowledgebaser(Entity entity, Entity merge)
		{
			Entity = entity;
			foreach (var property in merge?.Attributes)
			{
				var key = property.Key;
				var value = property.Value;
				Entity[key] = value;
			}
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public msdyn_msdyn_ocliveworkitem_knowledgebaser(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? activityid
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.activityid); }
		}

		/// <summary>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? knowledgebaserecordid
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.knowledgebaserecordid); }
		}

		/// <summary>
		/// <para>ReadOnly - Primary Key - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid msdyn_msdyn_ocliveworkitem_knowledgebaserId
		{
			get { return Id; }
		}

		/// <summary>
		/// <para>ReadOnly - BigInt</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public long? VersionNumber
		{
			get { return Entity.GetAttributeValue<long?>(Fields.VersionNumber); }
		}
	}
}