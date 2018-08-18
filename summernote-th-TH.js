(function($) {
  $.extend($.summernote.lang, {
    'th-TH': {
      font: {
        bold: 'ตัวหนา',
        italic: 'ตัวเอียง',
        underline: 'ขีดเส้นใต้',
        clear: 'ล้างรูปแบบตัวอักษร',
        height: 'ความสูงบรรทัด',
        name: 'แบบตัวอักษร',
        strikethrough: 'ขีดฆ่า',
        subscript: 'ตัวห้อย',
        superscript: 'ตัวยก',
        size: 'ขนาดตัวอักษร'
      },
      image: {
        image: 'รูปภาพ',
        insert: 'แทรกรูปภาพ',
        resizeFull: 'ปรับขนาดเท่าจริง',
        resizeHalf: 'ปรับขนาดลง 50%',
        resizeQuarter: 'ปรับขนาดลง 25%',
        floatLeft: 'ชิดซ้าย',
        floatRight: 'ชิดขวา',
        floatNone: 'ไม่จัดตำแหน่ง',
        shapeRounded: 'รูปร่าง: โค้งมน',
        shapeCircle: 'รูปร่าง: วงกลม',
        shapeThumbnail: 'รูปร่าง: ภาพตัวอย่าง',
        shapeNone: 'รูปร่าง: ไม่มี',
        dragImageHere: 'ลากรูปภาพที่ต้องการไว้ที่นี่',
        dropImage: 'วางรูปภาพหรือข้อความ',
        selectFromFiles: 'เลือกไฟล์รูปภาพ',
        maximumFileSize: 'ขนาดไฟล์สูงสุด',
        maximumFileSizeError: 'เกินขนาดไฟล์สูงสุด',
        url: 'ที่อยู่ URL ของรูปภาพ',
        remove: 'ลบรูปภาพ',
        original: 'ต้นฉบับ'
      },
      video: {
        video: 'วีดีโอ',
        videoLink: 'ลิงก์ของวีดีโอ',
        insert: 'แทรกวีดีโอ',
        url: 'ที่อยู่ URL ของวีดีโอ',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion หรือ Youku)'
      },
      link: {
        link: 'ตัวเชื่อมโยง',
        insert: 'แทรกตัวเชื่อมโยง',
        unlink: 'ยกเลิกตัวเชื่อมโยง',
        edit: 'แก้ไข',
        textToDisplay: 'ข้อความที่ให้แสดง',
        url: 'ที่อยู่เว็บไซต์ที่ต้องการให้เชื่อมโยงไปถึง?',
        openInNewWindow: 'เปิดในหน้าต่างใหม่'
      },
      table: {
        table: 'ตาราง',
        addRowAbove: 'เพิ่มแถวด้านบน',
        addRowBelow: 'เพิ่มแถวด้านล่าง',
        addColLeft: 'เพิ่มคอลัมน์ด้านซ้าย',
        addColRight: 'เพิ่มคอลัมน์ด้านขวา',
        delRow: 'ลบแถว',
        delCol: 'ลบคอลัมน์',
        delTable: 'ลบตาราง'
      },
      hr: {
        insert: 'แทรกเส้นคั่น'
      },
      style: {
        style: 'รูปแบบ',
        p: 'ปกติ',
        blockquote: 'ข้อความ',
        pre: 'โค้ด',
        h1: 'หัวข้อ 1',
        h2: 'หัวข้อ 2',
        h3: 'หัวข้อ 3',
        h4: 'หัวข้อ 4',
        h5: 'หัวข้อ 5',
        h6: 'หัวข้อ 6'
      },
      lists: {
        unordered: 'รายการแบบไม่มีลำดับ',
        ordered: 'รายการแบบมีลำดับ'
      },
      options: {
        help: 'ช่วยเหลือ',
        fullscreen: 'ขยายเต็มหน้าจอ',
        codeview: 'ซอร์สโค้ด'
      },
      paragraph: {
        paragraph: 'ย่อหน้า',
        outdent: 'เยื้องซ้าย',
        indent: 'เยื้องขวา',
        left: 'จัดหน้าชิดซ้าย',
        center: 'จัดหน้ากึ่งกลาง',
        right: 'จัดหน้าชิดขวา',
        justify: 'จัดบรรทัดเสมอกัน'
      },
      color: {
        recent: 'สีที่ใช้ล่าสุด',
        more: 'สีอื่นๆ',
        background: 'สีพื้นหลัง',
        foreground: 'สีพื้นหน้า',
        transparent: 'โปร่งแสง',
        setTransparent: 'ตั้งค่าความโปร่งแสง',
        reset: 'คืนค่า',
        resetToDefault: 'คืนค่ามาตรฐาน'
      },
      shortcut: {
        shortcuts: 'แป้นลัด',
        close: 'ปิด',
        textFormatting: 'การจัดรูปแบบข้อความ',
        action: 'การกระทำ',
        paragraphFormatting: 'การจัดรูปแบบย่อหน้า',
        documentStyle: 'รูปแบบของเอกสาร',
        extraKeys: 'ปุ่มเสริม'
      },
      help: {
        'insertParagraph': 'แทรกย่อหน้า',
        'undo': 'ยกเลิกคำสั่งล่าสุด',
        'redo': 'ทำซ้ำคำสั่งล่าสุด',
        'tab': 'แท็บ',
        'untab': 'ยกเลิกแท็บ',
        'bold': 'กำหนดรูปแบบตัวหนา',
        'italic': 'กำหนดรูปแบบตัวเอียง',
        'underline': 'กำหนดรูปแบบขีดเส้นใต้',
        'strikethrough': 'กำหนดรูปแบบขีดทับ',
        'removeFormat': 'ล้างการกำหนดรูปแบบ',
        'justifyLeft': 'ตั้งค่าจัดชิดซ้าย',
        'justifyCenter': 'ตั้งค่าจัดกึ่งกลาง',
        'justifyRight': 'ตั้งค่าจัดชิดขวา',
        'justifyFull': 'ตั้งค่าจัดเต็มแนว',
        'insertUnorderedList': 'แทรกหรือลบรายการแบบไม่มีลำดับ',
        'insertOrderedList': 'แทรกหรือลบรายการแบบมีลำดับ',
        'outdent': 'เยื้องซ้ายย่อหน้า',
        'indent': 'เยื้องขวาย่อหน้า',
        'formatPara': 'เปลี่ยนรูปแบบบล็อกปัจจุบันเป็นย่อหน้า (แท็ก P)',
        'formatH1': 'เปลี่ยนรูปแบบบล็อกปัจจุบันเป็น H1',
        'formatH2': 'เปลี่ยนรูปแบบบล็อกปัจจุบันเป็น H2',
        'formatH3': 'เปลี่ยนรูปแบบบล็อกปัจจุบันเป็น H3',
        'formatH4': 'เปลี่ยนรูปแบบบล็อกปัจจุบันเป็น H4',
        'formatH5': 'เปลี่ยนรูปแบบบล็อกปัจจุบันเป็น H5',
        'formatH6': 'เปลี่ยนรูปแบบบล็อกปัจจุบันเป็น H6',
        'insertHorizontalRule': 'แทรกเส้นแนวนอน',
        'linkDialog.show': 'แสดงกล่องข้อความตัวเชื่อมโยง'
      },
      history: {
        undo: 'ยกเลิกการกระทำ',
        redo: 'ทำซ้ำการกระทำ'
      },
      specialChar: {
        specialChar: 'อักขระพิเศษ',
        select: 'เลือกอักขระพิเศษ'
      }
    }
  });
})(jQuery);
