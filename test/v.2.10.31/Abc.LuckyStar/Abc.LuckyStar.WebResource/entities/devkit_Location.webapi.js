﻿'use strict';
/** @namespace LuckyStar */
var LuckyStar;(function(n){'use strict';n.devkit_LocationApi=function(n){function e(n,t,r,f,e,o,s,h){var l='@Microsoft.Dynamics.CRM.lookuplogicalname',c={},v=function(){return n[t+i]===undefined||n[t+i]===null?u:f!==undefined&&f.length>0?n[t+l]===e?n[t+i]:u:h?n[t+i].toString().split(';').map(function(n){return n.trim()}):n[t+i]},a=function(){return n[t]===undefined||n[t]===null?null:f!==undefined&&f.length>0?n[t+l]===undefined||n[t+l]===e?n[t]:null:h?n[t].toString().split(',').map(function(n){return parseInt(n,10)}):n[t]},y=function(i){h&&(i=i.join(','));f!==undefined&&f.length>0?(i=i.replace('{',u).replace('}',u),s[r+'@odata.bind']='/'+f+'('+i+')'):s[t]=i;n[t]=i};return Object.defineProperty(c,'FormattedValue',{get:v}),o?Object.defineProperty(c,'Value',{get:a}):Object.defineProperty(c,'Value',{get:a,set:y}),c}var u='',i='@OData.Community.Display.V1.FormattedValue',t={CreatedBy:{b:'createdby',a:'_createdby_value',c:'systemusers',d:'systemuser',r:!0},CreatedOn_UtcDateAndTime:{a:'createdon',r:!0},CreatedOnBehalfBy:{b:'createdonbehalfby',a:'_createdonbehalfby_value',c:'systemusers',d:'systemuser',r:!0},devkit_AccountId:{b:'devkit_AccountId',a:'_devkit_accountid_value',c:'accounts',d:'account'},devkit_ContactId:{b:'devkit_ContactId',a:'_devkit_contactid_value',c:'contacts',d:'contact'},devkit_CustomerId_account:{b:'devkit_CustomerId_account',a:'_devkit_customerid_value',c:'accounts',d:'account'},devkit_CustomerId_contact:{b:'devkit_CustomerId_contact',a:'_devkit_customerid_value',c:'contacts',d:'contact'},devkit_File_Name:{a:'devkit_file_name',r:!0},devkit_Image_Timestamp:{a:'devkit_image_timestamp',r:!0},devkit_Image_URL:{a:'devkit_image_url',r:!0},devkit_ImageId:{a:'devkit_imageid',r:!0},devkit_LocationId:{a:'devkit_locationid'},devkit_Name:{a:'devkit_name'},ImportSequenceNumber:{a:'importsequencenumber'},ModifiedBy:{b:'modifiedby',a:'_modifiedby_value',c:'systemusers',d:'systemuser',r:!0},ModifiedOn_UtcDateAndTime:{a:'modifiedon',r:!0},ModifiedOnBehalfBy:{b:'modifiedonbehalfby',a:'_modifiedonbehalfby_value',c:'systemusers',d:'systemuser',r:!0},OverriddenCreatedOn_UtcDateOnly:{a:'overriddencreatedon'},OwnerId_systemuser:{b:'ownerid',a:'_ownerid_value',c:'systemusers',d:'systemuser'},OwnerId_team:{b:'ownerid',a:'_ownerid_value',c:'teams',d:'team'},OwningBusinessUnit:{b:'owningbusinessunit',a:'_owningbusinessunit_value',c:'businessunits',d:'businessunit',r:!0},OwningTeam:{b:'owningteam',a:'_owningteam_value',c:'teams',d:'team',r:!0},OwningUser:{b:'owninguser',a:'_owninguser_value',c:'systemusers',d:'systemuser',r:!0},processid:{a:'processid'},stageid:{a:'stageid'},statecode:{a:'statecode'},statuscode:{a:'statuscode'},TimeZoneRuleVersionNumber:{a:'timezoneruleversionnumber'},traversedpath:{a:'traversedpath'},UTCConversionTimeZoneCode:{a:'utcconversiontimezonecode'},VersionNumber:{a:'versionnumber',r:!0}},f,r;n===undefined&&(n={});f={};for(r in t){var o=t[r].a,s=t[r].b,h=t[r].c,c=t[r].d,l=t[r].g,a=t[r].r;t[r]=e(n,o,s,h,c,a,f,l)}return t.Entity=f,t.EntityName='devkit_location',t.EntityCollectionName='devkit_locations',t['@odata.etag']=n['@odata.etag'],t.getAliasedValue=function(t,i){return n[t]===undefined||n[t]===null?null:i?n[t].toString().split(',').map(function(n){return parseInt(n,10)}):n[t]},t.getAliasedFormattedValue=function(t,r){return n[t+i]===undefined||n[t+i]===null?u:r?n[t+i].toString().split(';').map(function(n){return n.trim()}):n[t+i]},t}})(LuckyStar||(LuckyStar={}))
/** @namespace OptionSet */
var OptionSet;(function(n){n.devkit_Location={statecode:{Active:0,Inactive:1},statuscode:{Active:1,Inactive:2},RollupState:{NotCalculated:0,Calculated:1,OverflowError:2,OtherError:3,RetryLimitExceeded:4,HierarchicalRecursionLimitReached:5,LoopDetected:6}}})(OptionSet||(OptionSet={}))