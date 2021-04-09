using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyFather.DataProvider.SqlAccount
{
    public class SqlQueryVisitor : QueryExpressionVisitorBase
    {
        //public int Count { get; set; }


        //public override QueryExpression Visit(QueryExpression query)
        //{
        //    var filter = query.Criteria;
        //    var columns = query.ColumnSet;

        //    Count = query.TopCount.HasValue ? query.TopCount.Value : 5000;

        //    if (columns.AllColumns || columns.Columns.Count == 0)
        //    {
        //        Columns.Add("*");
        //    }
        //    else
        //    {
        //        Columns = columns.Columns;
        //    }

        //    if (filter.Conditions.Count > 0)
        //    {
        //        foreach (ConditionExpression condition in filter.Conditions)
        //        {
        //            if (condition.Operator == ConditionOperator.Equal && condition.Values.Count > 0)
        //            {
        //                var conditionValue = condition.Values.FirstOrDefault() as string;

        //                if (!string.IsNullOrEmpty(conditionValue))
        //                {
        //                    SQLCriteria.Add(condition.AttributeName, conditionValue);
        //                }
        //            }
        //        }
        //    }

        //    return query;
        //}
    }
}
