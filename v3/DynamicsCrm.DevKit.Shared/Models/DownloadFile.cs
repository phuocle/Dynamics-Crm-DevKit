using System;

namespace DynamicsCrm.DevKit.Shared.Models
{
    public class DownloadFile
    {
        public string FileName { get; set; }
        public string Content { get; set; }
        public string Name { get; set; }
        public Guid ObjectId { get; set; }
    }
}
