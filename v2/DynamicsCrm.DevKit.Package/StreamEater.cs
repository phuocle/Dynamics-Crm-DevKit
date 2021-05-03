using System;
using System.IO;
using Microsoft.VisualStudio.OLE.Interop;
using System.Collections.Generic;
using System.Linq;

namespace DynamicsCrm.DevKit.Package.Helpers
{
    /// <summary>
    /// Wrapper around an IStream object.  Stream should really implement this, as it's pretty cookie-cutter.  But it doesn't.
    /// http://www.codeproject.com/Articles/32906/Use-Visual-Studio-Extensibility-to-Make-a-Solution
    /// </summary>
    public class StreamEater : Stream
    {
        private IStream _iStream;

        public StreamEater(IStream streamFood)
        {
            _iStream = streamFood;
        }

        public override bool CanRead
        {
            get { return _iStream != null; }
        }

        public override bool CanSeek
        {
            get { return true; }
        }

        public override bool CanWrite
        {
            get { return true; }
        }

        public override void Flush()
        {
            _iStream.Commit(0);
        }

        public override long Length
        {
            get
            {
                STATSTG[] stat = new STATSTG[1];
                _iStream.Stat(stat, (uint)STATFLAG.STATFLAG_DEFAULT);

                return (long)stat[0].cbSize.QuadPart;
            }
        }

        public override long Position
        {
            get
            {
                return Seek(0, SeekOrigin.Current);
            }

            set
            {
                Seek(value, SeekOrigin.Begin);
            }
        }

        public override int Read(byte[] buffer, int offset, int count)
        {
            if (buffer == null)
                throw new ArgumentNullException("Buffer cannot be null.");

            uint byteCounter;
            byte[] b = buffer;

            if (offset != 0)
            {
                b = new byte[buffer.Length - offset];
                buffer.CopyTo(b, 0);
            }

            _iStream.Read(b, (uint)count, out byteCounter);

            if (offset != 0)
            {
                b.CopyTo(buffer, offset);
            }

            return (int)byteCounter;
        }

        public override long Seek(long offset, SeekOrigin origin)
        {
            LARGE_INTEGER l = new LARGE_INTEGER();
            ULARGE_INTEGER[] ul = new ULARGE_INTEGER[1] { new ULARGE_INTEGER() };
            l.QuadPart = offset;
            _iStream.Seek(l, (uint)origin, ul);
            return (long)ul[0].QuadPart;
        }

        public override void SetLength(long value)
        {
            if (!CanWrite)
                throw new InvalidOperationException();

            ULARGE_INTEGER ul = new ULARGE_INTEGER();
            ul.QuadPart = (ulong)value;
            _iStream.SetSize(ul);
        }

        public override void Write(byte[] buffer, int offset, int count)
        {
            if (buffer == null)
                throw new ArgumentNullException("Buffer cannot be null.");
            else if (!CanWrite)
                throw new InvalidOperationException();

            uint byteCounter;

            if (count > 0)
            {

                byte[] b = buffer;

                if (offset != 0)
                {
                    b = new byte[buffer.Length - offset];
                    buffer.CopyTo(b, 0);
                }

                _iStream.Write(b, (uint)count, out byteCounter);
                if (byteCounter != count)
                    throw new IOException("Failed to write the total number of bytes to IStream!");

                if (offset != 0)
                {
                    b.CopyTo(buffer, offset);
                }
            }
        }
    }
}
