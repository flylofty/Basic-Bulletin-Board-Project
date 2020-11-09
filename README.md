
서버-클라이언트 웹애플리케이션
===        

- 기획의도: 서버-클라이언트 구조 웹애플리케이션을 어떻게 구현하는지 궁금하여 시작해보았고 강의를 수강하고 구현까지 해보았습니다.
- 사용스택: JavaScript, NodeJS - Express FrameWork, React, Redux, MySql, Ant Design
- 개발환경: Ubuntu
- 개발도구: Visual Studio Code, WorkBench
- 프로젝트기간: 20. 05 ~ 20. 06
- 프로젝트인원: 2명

<br/>

프로젝트 설명
-----------

  + ### 서버    
        
       클라이언트에서 요청하는 정보에 대한 라우터들이 존재하고 해당 라우터에서 클라이언트가 필요로 하는 정보만을 보내줌

       회원가입 시 사용자 패스워드는 bcrypt를 이용하여 암호화한 후 데이터베이스에 저장함.
	
       사용자가 로그인을 위해 서버에 요청하여 정보를 전달하면 서버는 전달받은 정보를 암호화 하여 기존에 암호화되어 있는 정보와 비교를 하고 
       일치할 경우 JWT토큰과 생성시간을 데이터베이스에 저장함. 그 후 쿠키와 토큰 정보를 유저에게 보냄.
	
       로그아웃을 요청한 아이디의 토큰을 복호화하여 데이터베이스에서 찾은 후 토큰이 있을 시 JWT를 통해 인증하여 유효성을 확인한 후 로그아웃 절차가 진행됨.

       로그인하여 이용할 수 있는 페이지와 그렇지 않은 페이지가 구분되어있음.
       로그인이 필요한 페이지의 경우 클라이언트에서 각각의 페이지를 클릭할 때마다 AUTH로써 쿠키에 저장되어 있는 
       사용자 JWT를 복호화해서 토큰을 비교하므로써 사용자 인증의 유효성 판단하게됨 유효한 경우 해당 페이지로 이동할 수 있게 됨.

       미들웨어 AUTH에서 사용자 로그인 유효시간을 2시간으로 지정해두었음.
  
  + ### 클라이언트    
       
       서버에 정보를 요청하는 페이지는 응답 받은 정보를 화면에 보임.

       게시글 목록에서 사용자가 보기 희망하는 게시글의 제목을 눌렀을 경우
       서버에 요청하여 해당 게시글의 내용을 사용자에게 보여줌
       로그인 하지 않았을 경우에는 해당 게시글을 읽는 기능만을 제공함.
       좋아요, 댓글 기능을 state-hook으로 관리함.
       부적절한 게시글일 경우 타사용자에 의해 신고당할 수 있게 서버에 요청하는 기능을 넣음.

       기본적으로 삽입, 수정, 삭제를 서버에 요청하고 응답을 받으므로써 기능의 동작이 이뤄짐.
       수정, 삽입(등록), 삭제 등의 side-effect를 component에 effect-hook을 사용하여 수행함.
       댓글이 많아졌을 경우 페이지를 나눠 볼 수 있게 페이지네이션 기능을 넣음.
       댓글 계층의 구조를 두 단계로 나눠 댓글과 그에 뒤따르는 대댓글까지 보일 수 있게 하였고
       대댓글 중에 원하는 대댓글에 다시 댓글을 등록할 시 달고자 하는 대댓글 작성자의 아이디가
       우선되어 대댓글에 대한 댓글이 작성될 수 있게 하였음.
       기본 등록순으로 보이게 하고 필요시 최신순으로 보일 수 있게 하였음.

       페이지네이션의 경우 사용자의 선택에 따라 정해진 페이지를 서버에 요청하여 해당 부분을 보임.
       한 페이지에서 사용자가 지정한 수(기본 10개)의 게시글 목록을 해당 페이지 내에서 최신 순서로 보임.    

<br/>

클라이언트 동작 화면
-------------

| 회원가입, 로그인, 로그아웃 |
|:----------------------------------------:|
|<img src="https://user-images.githubusercontent.com/44724951/87519458-97bb3080-c6bc-11ea-9d79-49520e55c11d.gif" width=1000  />|

| 게시글 페이지네이션, 검색 |
|:----------------------------------------:|
|<img src="https://user-images.githubusercontent.com/44724951/87519700-f08ac900-c6bc-11ea-86a5-133a79d7997e.gif" width=1000 >|

| 게시글 작성, 수정, 삭제 |
|:----------------------------------------:|
|<img src="https://user-images.githubusercontent.com/44724951/87519713-f385b980-c6bc-11ea-830b-169c6910fddd.gif" width=1000  />|

| 게시글 및 게시글 댓글 |
|:----------------------------------------:|
|<img src="https://user-images.githubusercontent.com/44724951/87519686-e9fc5180-c6bc-11ea-948e-d3d0213ed59f.gif" width=1000  />|

| 마이페이지 |
|:----------------------------------------:|
|<img src="https://user-images.githubusercontent.com/44724951/87519705-f1bbf600-c6bc-11ea-85f2-869e846ffa3b.gif" width=1000  />|

| 관리자페이지 |
|:----------------------------------------:|
|<img src="https://user-images.githubusercontent.com/44724951/87519710-f2ed2300-c6bc-11ea-8ed4-43f9fa45e6fd.gif" width=1000  />

<br/>

참고
-------------
https://github.com/jaewonhimnae/boilerplate-mern-stack   


=======
서버-클라이언트 웹애플리케이션
===        

- 기획의도: 서버-클라이언트 구조 웹애플리케이션을 어떻게 구현하는지 궁금하여 시작해보았고 강의를 수강하고 구현까지 해보았습니다.
- 사용스택: JavaScript, NodeJS - Express FrameWork, React, Redux, MySql, Ant Design
- 개발환경: Ubuntu
- 개발도구: Visual Studio Code, WorkBench
- 프로젝트기간: 20. 05 ~ 20. 06
- 프로젝트인원: 2명

<br/>

프로젝트 설명
-----------

  + ### 서버    
        
       클라이언트에서 요청하는 정보에 대한 라우터들이 존재하고 해당 라우터에서 클라이언트가 필요로 하는 정보만을 보내줌

       회원가입 시 사용자 패스워드는 bcrypt를 이용하여 암호화한 후 데이터베이스에 저장함.
	
       사용자가 로그인을 위해 서버에 요청하여 정보를 전달하면 서버는 전달받은 정보를 암호화 하여 기존에 암호화되어 있는 정보와 비교를 하고 
       일치할 경우 JWT토큰과 생성시간을 데이터베이스에 저장함. 그 후 쿠키와 토큰 정보를 유저에게 보냄.
	
       로그아웃을 요청한 아이디의 토큰을 복호화하여 데이터베이스에서 찾은 후 토큰이 있을 시 JWT를 통해 인증하여 유효성을 확인한 후 로그아웃 절차가 진행됨.

       로그인하여 이용할 수 있는 페이지와 그렇지 않은 페이지가 구분되어있음.
       로그인이 필요한 페이지의 경우 클라이언트에서 각각의 페이지를 클릭할 때마다 AUTH로써 쿠키에 저장되어 있는 
       사용자 JWT를 복호화해서 토큰을 비교하므로써 사용자 인증의 유효성 판단하게됨 유효한 경우 해당 페이지로 이동할 수 있게 됨.

       미들웨어 AUTH에서 사용자 로그인 유효시간을 2시간으로 지정해두었음.
  
  + ### 클라이언트    
       
       서버에 정보를 요청하는 페이지는 응답 받은 정보를 화면에 보임.

       게시글 목록에서 사용자가 보기 희망하는 게시글의 제목을 눌렀을 경우
       서버에 요청하여 해당 게시글의 내용을 사용자에게 보여줌
       로그인 하지 않았을 경우에는 해당 게시글을 읽는 기능만을 제공함.
       좋아요, 댓글 기능을 state-hook으로 관리함.
       부적절한 게시글일 경우 타사용자에 의해 신고당할 수 있게 서버에 요청하는 기능을 넣음.

       기본적으로 삽입, 수정, 삭제를 서버에 요청하고 응답을 받으므로써 기능의 동작이 이뤄짐.
       수정, 삽입(등록), 삭제 등의 side-effect를 component에 effect-hook을 사용하여 수행함.
       댓글이 많아졌을 경우 페이지를 나눠 볼 수 있게 페이지네이션 기능을 넣음.
       댓글 계층의 구조를 두 단계로 나눠 댓글과 그에 뒤따르는 대댓글까지 보일 수 있게 하였고
       대댓글 중에 원하는 대댓글에 다시 댓글을 등록할 시 달고자 하는 대댓글 작성자의 아이디가
       우선되어 대댓글에 대한 댓글이 작성될 수 있게 하였음.
       기본 등록순으로 보이게 하고 필요시 최신순으로 보일 수 있게 하였음.

       페이지네이션의 경우 사용자의 선택에 따라 정해진 페이지를 서버에 요청하여 해당 부분을 보임.
       한 페이지에서 사용자가 지정한 수(기본 10개)의 게시글 목록을 해당 페이지 내에서 최신 순서로 보임.    

<br/>

클라이언트 동작 화면
-------------

| 회원가입, 로그인, 로그아웃 |
|:----------------------------------------:|
|<img src="https://user-images.githubusercontent.com/44724951/87519458-97bb3080-c6bc-11ea-9d79-49520e55c11d.gif" width=1000  />|

| 게시글 페이지네이션, 검색 |
|:----------------------------------------:|
|<img src="https://user-images.githubusercontent.com/44724951/87519700-f08ac900-c6bc-11ea-86a5-133a79d7997e.gif" width=1000 >|

| 게시글 작성, 수정, 삭제 |
|:----------------------------------------:|
|<img src="https://user-images.githubusercontent.com/44724951/87519713-f385b980-c6bc-11ea-830b-169c6910fddd.gif" width=1000  />|

| 게시글 및 게시글 댓글 |
|:----------------------------------------:|
|<img src="https://user-images.githubusercontent.com/44724951/87519686-e9fc5180-c6bc-11ea-948e-d3d0213ed59f.gif" width=1000  />|

| 마이페이지 |
|:----------------------------------------:|
|<img src="https://user-images.githubusercontent.com/44724951/87519705-f1bbf600-c6bc-11ea-85f2-869e846ffa3b.gif" width=1000  />|

| 관리자페이지 |
|:----------------------------------------:|
|<img src="https://user-images.githubusercontent.com/44724951/87519710-f2ed2300-c6bc-11ea-8ed4-43f9fa45e6fd.gif" width=1000  />

<br/>

참고
-------------
https://github.com/jaewonhimnae/boilerplate-mern-stack   


>>>>>>> c35958b1b3a79a663b84111e8fb9214f9e6769fb
