﻿//---------------------------------------------------------------------------------------------------
// <auto-generated>
//		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
//		Generated by DynamicsCrm.DevKit - https://github.com/phuocle/Dynamics-Crm-DevKit
// </auto-generated>
//---------------------------------------------------------------------------------------------------
using Microsoft.Xrm.Sdk;
using System;
using System.Diagnostics;

namespace Abc.LuckyStar2.Shared.Entities.KnowledgeArticlesCategoriesOptionSets
{

}

namespace Abc.LuckyStar2.Shared.Entities
{
	public partial class KnowledgeArticlesCategories : EntityBase
	{
		public struct Fields
		{
			public const string CategoryId = "categoryid";
			public const string KnowledgeArticleCategoryId = "knowledgearticlecategoryid";
			public const string KnowledgeArticleId = "knowledgearticleid";
			public const string VersionNumber = "versionnumber";
		}

		public const string EntityLogicalName = "knowledgearticlescategories";

		public const int EntityTypeCode = 9960;

		[DebuggerNonUserCode()]
		public KnowledgeArticlesCategories()
		{
			Entity = new Entity(EntityLogicalName);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public KnowledgeArticlesCategories(Guid KnowledgeArticlesCategoriesId)
		{
			Entity = new Entity(EntityLogicalName, KnowledgeArticlesCategoriesId);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public KnowledgeArticlesCategories(string keyName, object keyValue)
		{
			Entity = new Entity(EntityLogicalName, keyName, keyValue);
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public KnowledgeArticlesCategories(Entity entity)
		{
			Entity = entity;
			PreEntity = CloneThisEntity(Entity);
		}

		[DebuggerNonUserCode()]
		public KnowledgeArticlesCategories(Entity entity, Entity merge)
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
		public KnowledgeArticlesCategories(KeyAttributeCollection keys)
		{
			Entity = new Entity(EntityLogicalName, keys);
			PreEntity = CloneThisEntity(Entity);
		}

		/// <summary>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? CategoryId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.CategoryId); }
		}

		/// <summary>
		/// <para>Unique identifier of the Category for the knowledge article.</para>
		/// <para>Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? KnowledgeArticleCategoryId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.KnowledgeArticleCategoryId); }
			set { Entity.Attributes[Fields.KnowledgeArticleCategoryId] = value; }
		}

		/// <summary>
		/// <para>ReadOnly - Uniqueidentifier</para>
		/// <para></para>
		/// </summary>
		[DebuggerNonUserCode()]
		public Guid? KnowledgeArticleId
		{
			get { return Entity.GetAttributeValue<Guid?>(Fields.KnowledgeArticleId); }
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