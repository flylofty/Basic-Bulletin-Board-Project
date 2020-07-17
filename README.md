서버-클라이언트 웹애플리케이션
===

- 기획의도: 서버-클라이언트 구조 웹애플리케이션을 어떻게 구현하는지 궁금하여 시작해보았고 강의를 수강하고 구현까지 해보았습니다.
- 사용스택: JavaScript, NodeJS - Express FrameWork, React, Redux, MySql, Ant Design
- 개발환경: Ubuntu
- 개발도구: Visual Studio Code, WorkBench
- 프로젝트기간: 20. 05 ~ 20. 06
- 프로젝트인원: 2명

프로젝트 설명
-------------

+ ### 회원가입, 로그인, 로그아웃

	bcrypt를 이용하여 패스워드를 암호화한 후 DB에 저장.
	
	사용자가 로그인을 위해 서버에 요청하여 정보를 전달하면 
	서버는 전달받은 그 정보를 암호화 하여 
	기존에 암호화되어 있는 정보와 비교하고
	맞을 시 JWT토큰, 생성시간을 DB에 저장 후 쿠키, 토큰 정보를 유저에게 보냄.
	
	로그아웃을 요청한 아이디의 토큰을 복호화하여 DB에서 찾은 후
	토큰이 있을 시 로그아웃, 없을 시에는 에러메시지를 전달.
	로그아웃을 요청한 사용자를 JWT를 통하여 인증하여 유효성을 확인한 후
	로그아웃 절차가 진행됨.

<p align="center"><img src="https://user-images.githubusercontent.com/44724951/87519458-97bb3080-c6bc-11ea-9d79-49520e55c11d.gif" width=700 height=500  /></p>
		
		
+ ### 게시글 페이지네이션, 검색, 작성, 수정, 삭제

	사용자의 선택에 따라 정해진 페이지를 서버에 요청하여 해당 부분을 보임.
	한 페이지에서 사용자가 지정한 수(기본 10개)의 게시글 목록을 해당 페이지 내에서 최신 순서로 보임.    

<p align="center"><img src="https://user-images.githubusercontent.com/44724951/87519700-f08ac900-c6bc-11ea-86a5-133a79d7997e.gif" width=700 height=500 ></p>



+ ### 게시글 작성, 수정, 삭제    
	
	로그인되어 있을 경우 게시글을 작성할 수 있고 작성하기를 희망하는
	게시글의 제목과 내용을 서버에 저장하고자 요청하면 게시글의 번호를 부여받고
	게시글 목록에 보이게 됨.    

<p align="center"><img src="https://user-images.githubusercontent.com/44724951/87519713-f385b980-c6bc-11ea-830b-169c6910fddd.gif" width=700 height=500  /></p>
	
	
+ ### 게시글 및 게시글 댓글
	게시글 목록에서 사용자가 보기를 희망하는 게시글의 제목을 눌렀을 경우
	서버에 요청하여 해당 게시글의 내용을 사용자에게 보여줌
	로그인 하지 않았을 경우에는 해당 게시글을 읽는 기능만을 제공함.
	좋아요, 댓글 기능을 state-hook으로 관리함.
	부적절한 게시글일 경우 타사용자에 의해 신고당할 수 있게 서버에 요청하는 기능을 넣음.
	
	기본적으로 삽입, 수정, 삭제의 기능을 서버에 요청하여 기능의 동작이 이뤄짐.
	수정, 삽입(등록), 삭제 등의 side-effect를 component에 effect-hook을 사용하여 수행함.
	댓글이 많아졌을 경우 페이지를 나눠 볼 수 있게 위와 동일한 페이지네이션 기능을 넣음.
	댓글 계층의 구조를 두 단계로 나눠 댓글과 그에 뒤따르는 대댓글까지 보일 수 있게 하였고
	대댓글 중에 원하는 대댓글에 다시 댓글을 등록할 시 달고자 하는 대댓글 작성자의 아이디가
	우선되어 대댓글에 대한 댓글이 작성될 수 있게 하였음.
	기본 등록순으로 보이게 하고 필요시 최신순으로 보일 수 있게 하였음.        
	
<p align="center"><img src="https://user-images.githubusercontent.com/44724951/87519686-e9fc5180-c6bc-11ea-948e-d3d0213ed59f.gif" width=700 height=500  /></p>    


+ ### 마이페이지    
    사용자의 기본 정보 열람 및 수정, 활동 내역을 볼 수 있는 페이지.
    이와 관련된 기능을 서버에 요청하여 작동됨.        
    
<p align="center"><img src="https://user-images.githubusercontent.com/44724951/87519705-f1bbf600-c6bc-11ea-85f2-869e846ffa3b.gif" width=700 height=500  /></p>    


+ ### 관리자페이지         
    관리자 권한이 있는 사용자에 의해 신고된 게시글 및 댓글을 수정, 삭제할 수 있는 페이지        
    
<p align="center"><img src="https://user-images.githubusercontent.com/44724951/87519710-f2ed2300-c6bc-11ea-8ed4-43f9fa45e6fd.gif" width=700 height=500  /></p>
