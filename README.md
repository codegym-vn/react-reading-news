# App Đọc Báo React Native Training

Case Study: Vận dụng các kiến thức tổng hợp từ bài 1, viết 1 ứng dụng đọc báo

# Mục Tiêu Case Study
- Biết cấu trúc thư mục theo Redux
- Sử dụng thành thạo navigator để chuyển màn hình
- Biết vận dụng các kiến thức về Flex, StyleSheet để design giao diện cho App
- Vận dụng các kiến thức đã học về Redux để parse data từ API và hiển thị ra màn hình

# Nội dung bài tập
- Tạo 1 App hiển thị danh sách các bài báo mới nhất từ Vnexpress.net
- Giao diện gồm 1 list các bài viết mới nhất trên Vnexpress
- Mỗi Row bao gồm : Ảnh, Title, Thời gian publish bài viết
- Click vào mỗi bài viết, sẽ đọc được nội dung chi tiết của bài viết đó
- Giao diện 3 màn hình như bên dưới 

![home_screen](https://github.com/anhtbok92/AppDocBaoReactNativeTraining/blob/master/img/home_screen.png)

![detail_screen](https://github.com/anhtbok92/AppDocBaoReactNativeTraining/blob/master/img/detail_screen.png)

![webview_screen](https://github.com/anhtbok92/AppDocBaoReactNativeTraining/blob/master/img/webview_screen.png)

# Gợi ý
- Sử dụng React-navigator cho 3 màn hình cần làm
- Sử dụng website https://rss2json.com để convert từ rss to json. Nội dung rss chính là nội dung được chia sẻ trên trang vnexpress.net
- Thiết kế app theo Redux-thunk
- Sử dụng FlatList hiển thị danh sách bài viết
- Sử dụng Webview để hiển thị màn hình chi tiết bài viết

# Độ khó ****

# Thời gian hoàn thành 15h
