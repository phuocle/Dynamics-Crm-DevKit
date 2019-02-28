using System;
using System.Collections.Generic;
using System.Reflection;
using FakeXrmEasy;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.Xrm.Sdk;
using Paz.LuckeyMonkey.ProxyTypes;

namespace Paz.LuckeyMonkey.Workflow.Test
{
    [TestClass]
    public class RetrieveUsersTest
    {
        public static XrmFakedContext Context { get; set; }
        public static XrmFakedWorkflowContext WorkflowContext { get; set; }

        [ClassInitialize()]
        public static void ClassInit(TestContext context)
        {
            Context = new XrmFakedContext();
            WorkflowContext = Context.GetDefaultWorkflowContext();
        }

        [TestMethod]
        public void RetrieveUsers_Test_01()
        {
            var CURRENT_USER_ID = Guid.Parse("{10000000-0000-0000-0000-000000000000}");
            var USER_ID_1 = Guid.Parse("{00000000-0000-0000-0000-000000000001}");
            var USER_ID_2 = Guid.Parse("{00000000-0000-0000-0000-000000000002}");
            var USER_ID_3 = Guid.Parse("{00000000-0000-0000-0000-000000000003}");
            var USER_ID_4 = Guid.Parse("{00000000-0000-0000-0000-000000000004}");
            var USER_ID_5 = Guid.Parse("{00000000-0000-0000-0000-000000000005}");
            var TEAM_ID_1 = Guid.Parse("{00000000-0000-0000-0000-00000000000A}");
            var TEAM_ID_2 = Guid.Parse("{00000000-0000-0000-0000-00000000000B}");
            var TEAM_ID_3 = Guid.Parse("{00000000-0000-0000-0000-00000000000C}");
            //setup
            //TEAM_ID_1 = CURRENT_USER_ID, USER_ID_1, USER_ID_2, USER_ID_3
            //TEAM_ID_2 = CURRENT_USER_ID, USER_ID_3, USER_ID_4
            //TEAM_ID_3 = USER_ID_1, USER_ID_5
            var currentUser = new Entity("systemuser", CURRENT_USER_ID);
            var user1 = new Entity("systemuser", USER_ID_1);
            var user2 = new Entity("systemuser", USER_ID_2);
            var user3 = new Entity("systemuser", USER_ID_3);
            var user4 = new Entity("systemuser", USER_ID_4);
            var user5 = new Entity("systemuser", USER_ID_5);
            var team1 = new Entity("team", TEAM_ID_1);
            team1["isdefault"] = false;
            var team2 = new Entity("team", TEAM_ID_2);
            team2["isdefault"] = false;
            var team3 = new Entity("team", TEAM_ID_3);
            team2["isdefault"] = false;
            Context.ProxyTypesAssembly = Assembly.GetAssembly(typeof(ProxyTypesAssembly));
            Context.Data.Clear();
            Context.Initialize(new List<Entity>() {
                currentUser, user1, user2, user3, user4, user5,
                team1, team2, team3
            });
            Context.AddRelationship("teammembership", new XrmFakedRelationship()
            {
                RelationshipType = XrmFakedRelationship.enmFakeRelationshipType.ManyToMany,
                IntersectEntity = "teammembership",
                Entity1Attribute = "systemuserid",
                Entity1LogicalName = "systemuser",
                Entity2Attribute = "teamid",
                Entity2LogicalName = "team"
            });
            Context.GetOrganizationService().Associate("team", TEAM_ID_1, new Relationship("teammembership"), new EntityReferenceCollection() {
                currentUser.ToEntityReference(),
                user1.ToEntityReference(),
                user2.ToEntityReference(),
                user3.ToEntityReference()
            });
            Context.GetOrganizationService().Associate("team", TEAM_ID_2, new Relationship("teammembership"), new EntityReferenceCollection() {
                currentUser.ToEntityReference(),
                user3.ToEntityReference(),
                user4.ToEntityReference()
            });
            Context.GetOrganizationService().Associate("team", TEAM_ID_3, new Relationship("teammembership"), new EntityReferenceCollection() {
                user1.ToEntityReference(),
                user5.ToEntityReference()
            });
            Context.CallerId = currentUser.ToEntityReference();
            WorkflowContext.InitiatingUserId = CURRENT_USER_ID;
            //Call workflow
            var inputs = new Dictionary<string, object>() { };
            var result = Context.ExecuteCodeActivity<RetrieveUsers>(WorkflowContext, inputs);
            var userIds = (string)result["UserIds"];
            //Check
            Assert.AreEqual(userIds, $"{USER_ID_1};{USER_ID_2};{USER_ID_3};{USER_ID_4}");
        }
    }
}
