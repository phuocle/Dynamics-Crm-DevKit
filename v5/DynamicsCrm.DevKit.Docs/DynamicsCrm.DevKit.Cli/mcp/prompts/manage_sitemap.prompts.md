# manage_sitemap — Prompt Validation

## Before Optimization

> 10 user prompts based on the original (verbose) tool description with THREE ACTIONS, PARAMETERS, 3 WORKFLOW sections, WHEN TO USE, SAFETY, TIPS.

1. "Update the Sales Hub sitemap to add a new area called 'Analytics' with a group containing the account and contact entities"
2. "I need to add the custom entity new_project to the existing navigation in my model-driven app's sitemap"
3. "Create a brand new sitemap for my app module that has areas for Sales, Service, and Settings"
4. "The sitemap update I just made broke the navigation — can you undo it using the backup file?"
5. "Before modifying the sitemap, can you show me the current SiteMap XML for my app so I can review it?"
6. "Add a subarea pointing to a custom URL https://reports.contoso.com under the Reports group in the sitemap"
7. "I need to reorganize the sitemap — move the 'Cases' entity from the Service area to a new area called 'Support Operations'"
8. "Can you create a sitemap with a single area that has all my custom entities grouped by module?"
9. "What's the correct workflow to safely update a sitemap? I want to make sure I have a backup first"
10. "Update my sitemap to add a web resource subarea that opens a dashboard HTML page under the main navigation area"

## After Optimization

> 10 user prompts based on the optimized (compressed) tool description with THREE ACTIONS + SAFETY + 2 TIPS (with schema://sitemapxml reference).

1. "Update the sitemap for my Sales Hub app to include a new 'Reporting' area with the opportunity and quote entities"
2. "Add the incident entity to the Service area in my model-driven app sitemap"
3. "Create a sitemap for my newly created app module — it needs areas for Operations and Administration"
4. "My sitemap is broken after the last change — please undo it from the backup file at .devkit/backups/sitemaps/saleshub_abc123.sitemap.json"
5. "I want to add a subarea with a custom URL to our external knowledge base in the sitemap"
6. "Remove the 'Legacy' group from the sitemap and move its subareas into the 'Main' group"
7. "Add the new_timeentry and new_expense custom entities to the Project area of the sitemap"
8. "Can you update the sitemap to reorder the areas so that 'Dashboard' appears first?"
9. "Create a minimal sitemap with just one area and one group containing account, contact, and lead"
10. "The navigation titles in my sitemap are wrong — update the area labels to use our new branding names"

