/* Publication records. Adding a paper is a data entry here — no component
   changes needed. Author strings keep their original punctuation; the
   Projects component highlights Dieu Anh's name in whatever form it takes. */

const papers = [
  {
    id: 1,
    title:
      "The Role of Fear of Missing out (FOMO), Loss Aversion, and Herd Behavior in Gold Investment Decisions: A Study in the Vietnamese Market",
    pdfUrl: "/dieuanhcv/assets/pdfs/bai-1.pdf",
    authors: "Xuan Hung Nguyen*, Dieu Anh Bui, Nam Anh Le and Quynh Trang Nguyen",
    journal: "International Journal of Financial Studies",
    year: "2024",
    description:
      "This study investigates how psychological factors such as FOMO, loss aversion, and herd behavior influence individual investors' decisions to invest in gold in Vietnam.",
  },
  {
    id: 2,
    title:
      "Ảnh hưởng của hội chứng sợ bỏ lỡ tới quyết định đầu tư vàng tại Việt Nam",
    pdfUrl: "/dieuanhcv/assets/pdfs/bai-2.pdf",
    authors:
      "Nguyễn Xuân Hưng*, Bùi Diệu Anh, Lê Nam Anh, Nguyễn Quỳnh Trang, Phạm Thị Hạnh, Nguyễn Minh Thảo",
    journal: "Tạp chí Kinh tế và Phát triển",
    year: "3/2025",
    description:
      "Nghiên cứu này điều tra ảnh hưởng của các yếu tố tâm lý như hội chứng sợ bỏ lỡ (FOMO), ác cảm với thua lỗ và hành vi bầy đàn đến quyết định đầu tư vàng của các nhà đầu tư cá nhân tại Việt Nam.",
  },
  {
    id: 3,
    title:
      "The impact of FOMO on investment decisions in gold: The case of Vietnam",
    pdfUrl: "/dieuanhcv/assets/pdfs/bai-3.pdf",
    authors:
      "Xuan Hung Nguyen*, Manh Dung Tran, Dieu Anh Bui, Nam Anh Le, Quynh Trang Nguyen, Kim Ngan Nguyen, Thi Minh Phuong Nguyen",
    journal:
      "Conference Proceedings - 7th International Conference on Contemporary Issues in Economics, Management and Business",
    year: "2025",
    description:
      "This study explores the influence of the Fear of Missing Out (FOMO) phenomenon on individual investors' decisions to invest in gold within the Vietnamese market.",
  },
  {
    id: 4,
    title:
      "Tác động bất đối xứng của chất lượng thể chế đến du lịch: Nghiên cứu tại các quốc gia thành viên ASEAN",
    pdfUrl: "/dieuanhcv/assets/pdfs/bai-4.pdf",
    authors:
      "Nguyễn Thanh Hằng*, Nguyễn Thị Minh Ngọc, Bùi Diệu Anh, Đinh Thị Ánh Tuyết, Trần Huyền Thương",
    journal: "Kỷ yếu Hội thảo Khoa học Quốc gia",
    year: "12/2024",
    description:
      "Nghiên cứu này phân tích tác động bất đối xứng của chất lượng thể chế đến ngành du lịch tại các quốc gia thành viên ASEAN, sử dụng mô hình GMM để xử lý dữ liệu bảng.",
  },
  {
    id: 5,
    title:
      "ASYMMETRIC IMPACT OF INSTITUTIONAL QUALITY ON TOURISM RECEIPTS: A PANEL ANALYSIS OF ASEAN'S MEMBER COUNTRIES",
    pdfUrl: "/dieuanhcv/assets/pdfs/bai-5.pdf",
    authors:
      "Dr. Tran Phuoc Huy*, Nguyen Thanh Hang, Nguyen Th Minh Ngoc, Bui Dieu Anh, Dinh Thi Anh Tuyet, Tran Huyen Thuong",
    journal:
      "INTERNATIONAL CONFERENCE ON GLOBAL ECONOMY INSTABILITY AND POLICIES OF VIETNAM'S FINANCIAL SYSTEM - NATIONAL ECONOMICS UNIVERSITY PUBLISHING HOUSE",
    year: "2025",
    description:
      "This study examines the asymmetric effects of institutional quality on tourism receipts in ASEAN member countries using panel data analysis.",
  },
  {
    id: 6,
    title:
      "Tác động bất đối xứng của chất lượng thể chế đến lượng khách du lịch: Nghiên cứu tại các nước thành viên ASEAN",
    pdfUrl: "/dieuanhcv/assets/pdfs/bai-6.pdf",
    authors:
      "TS. Trần Phước Huy, Nguyễn Thanh Hằng, Nguyễn Thị Minh Ngọc, Bùi Diệu Anh, Đinh Thị Ánh Tuyết, Trần Huyền Thương",
    journal: "Tạp chí Kinh tế và Dự báo",
    year: "2025",
    description:
      "Sử dụng mô hình tự hồi quy phân phối trễ phi tuyến và kết quả hồi quy dữ liệu bảng, nghiên cứu phân tích tác động bất đối xứng của chất lượng thể chế đến lượng khách du lịch đến tại 10 quốc gia thành viên ASEAN giai đoạn 2002-2023 thông qua 6 Chỉ số Quản trị Toàn cầu của Ngân hàng Thế giới.",
  },
  {
    id: 7,
    title:
      "PHÁT TRIỂN NGUỒN NHÂN LỰC LĨNH VỰC LOGISTICS TRONG BỐI CẢNH CÁCH MẠNG CÔNG NGHIỆP 4.0",
    pdfUrl: "/dieuanhcv/assets/pdfs/bai-7.pdf",
    authors:
      "NGUYỄN XUÂN HƯNG*, BÙI DIỆU ANH**, LÊ NAM ANH***, LÊ ANH ĐỨC****, LÊ MẠNH HÙNG*****",
    journal: "Tạp chí Kinh tế và Quản lý",
    year: "2025",
    description:
      "Phát triển nguồn nhân lực lĩnh vực logistics trong bối cảnh cách mạng công nghiệp 4.0.",
  },
  {
    id: 8,
    title:
      "OPPORTUNITIES AND CHALLENGES IN THE DEVELOPMENT OF THE DIGITAL ECONOMY IN VIETNAM",
    pdfUrl: "/dieuanhcv/assets/pdfs/bai-8.pdf",
    authors: "Huy Thanh Phan, Hong Van Luong, Dieu Anh Bui",
    journal:
      "The 3rd International Conference on Contemporary Issues in Business and Management BUSINESS ADMINISTRATION FOR VIETNAM'S SUSTAINABLE DOUBLE-DIGIT ECONOMIC GROWTH TARGET",
    year: "2026",
    description: "",
  },
];

export default papers;
