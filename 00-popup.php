<!DOCTYPE html>
<html lang="th">

<head>
    <?php include_once('include/header.php'); ?>
    <?php include_once('include/style.php'); ?>
</head>

<body>
    <?php include('include/topnav.php'); ?>
    <?php include('include/main-slide.php'); ?>


    <div class="popup-container active" data-popup="subscribe">
        <div class="wrapper">

            <div class="popup-box p-2">
                <a class="btn btn-card btn-popup-toggle" href="#" data-popup="subscribe">  <em class="zmdi zmdi-close color-02"
                        style="padding-right:2.6rem;"></em>ปิด</a>

                <div class="img-container">
                    <img class="w-100" src="public/assets/app/images/component/pop-up.jpg" alt="Popup Banner" />
                </div>
                <div class="btns mt-0-5 d-flex justify-content-center">
                    <div class="form-check form-check-inline mr-3">
                        <input class="form-check-input mr-2" type="checkbox" id="show-toggle" value="1">
                        <label class="form-check-label mt-1" for="show-toggle">
                            ไม่ต้องแสดงข้อความนี้อีก
                        </label>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <section class="section-padding bg-sec-01" id="section-2">
        <div class="container">
            <div class="row mb-5">
                <h3 class="h2 sm fw-300 mb-2" data-aos="fade-up" data-aos-delay="0">สมศ.ยุคใหม่</h3>
                <p class="md fw-200" data-aos="fade-up" data-aos-delay="0">
                    เพื่อการประเมินคุณภาพภายนอก</p>
                <p class="md fw-200" data-aos="fade-up" data-aos-delay="0">
                    ที่ได้มาตรฐาน</p>
            </div>
            <div class="row" data-aos="fade-up" data-aos-delay="0">
                <div class="col-12 col-md-12 col-lg-6">
                    <img class=" w-100" src="public/assets/app/images/component/book.png" alt="book">
                </div>
                <div class="col-12 col-md-12 col-lg-6">
                    <div class="tab">
                        <ul class="tabs p-0 justify-content-lg-start justify-content-md-center">
                            <li><a href="#" id="tab-01">ความก้าวหน้า<br> การประเมินคุณภาพ ภายนอก</a></li>
                            <li><a href="#" id="tab-02">สถานศึกษา / สถาบันอุดมศึกษา และต้นสังกัด</a></li>
                            <li><a href="#" id="tab-03">ผู้ประเมิน<br> ภายนอก</a></li>
                            <li><a href="#" id="tab-04">หน่วยกำกับ<br> การประเมิน/ผู้กำกับ การประเมิน</a></li>
                        </ul>
                        <div class="tab_content">
                            <div class="tabs_item">
                                <div class="tab-container tab-container-01">
                                    <div class="row">
                                        <div class="col-md-4 border-1" data-aos="fade-up" data-aos-delay="600">
                                            <div class="tabs">
                                                <div class="ss-box-shadow"></div>
                                                <?php include('component/category-tab1.php'); ?>
                                            </div>
                                        </div>
                                        <div class="col-md-8" data-aos="fade-up" data-aos-delay="750">
                                            <div class="tab-contents">
                                                <div class="tab-contents">
                                                    <?php for($i=0; $i<07; $i++){?>
                                                    <div class="tab-content <?php if($i==0)echo 'active'; ?>"
                                                        data-tab="<?= $i ?>">
                                                        <?php include('component/tab-inner.php'); ?>
                                                    </div>
                                                    <?php }?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tabs_item">
                                <div class="tab-container tab-container-01">
                                    <div class="row">
                                        <div class="col-md-4 border-1" data-aos="fade-up" data-aos-delay="600">
                                            <div class="tabs">
                                                <div class="ss-box-shadow"></div>
                                                <?php include('component/category-tab2.php'); ?>
                                            </div>
                                        </div>
                                        <div class="col-md-8" data-aos="fade-up" data-aos-delay="750">
                                            <div class="tab-contents">
                                                <div class="tab-contents">
                                                    <?php for($i=0; $i<07; $i++){?>
                                                    <div class="tab-content <?php if($i==0)echo 'active'; ?>"
                                                        data-tab="<?= $i ?>">
                                                        <?php include('component/tab-inner.php'); ?>
                                                    </div>
                                                    <?php }?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tabs_item">
                                <div class="tab-container tab-container-01">
                                    <div class="row">
                                        <div class="col-md-4 border-1" data-aos="fade-up" data-aos-delay="600">
                                            <div class="tabs">
                                                <div class="ss-box-shadow"></div>
                                                <?php include('component/category-tab3.php'); ?>
                                            </div>
                                        </div>
                                        <div class="col-md-8" data-aos="fade-up" data-aos-delay="750">
                                            <div class="tab-contents">
                                                <div class="tab-contents">
                                                    <?php for($i=0; $i<07; $i++){?>
                                                    <div class="tab-content <?php if($i==0)echo 'active'; ?>"
                                                        data-tab="<?= $i ?>">
                                                        <?php include('component/tab-inner.php'); ?>
                                                    </div>
                                                    <?php }?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tabs_item">
                                <div class="tab-container tab-container-01">
                                    <div class="row">
                                        <div class="col-md-4 border-1" data-aos="fade-up" data-aos-delay="600">
                                            <div class="tabs">
                                                <div class="ss-box-shadow"></div>
                                                <?php include('component/category-tab4.php'); ?>
                                            </div>
                                        </div>
                                        <div class="col-md-8" data-aos="fade-up" data-aos-delay="750">
                                            <div class="tab-contents">
                                                <div class="tab-contents">
                                                    <?php for($i=0; $i<07; $i++){?>
                                                    <div class="tab-content <?php if($i==0)echo 'active'; ?>"
                                                        data-tab="<?= $i ?>">
                                                        <?php include('component/tab-inner.php'); ?>
                                                    </div>
                                                    <?php }?>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    </section>

    <section class="section-padding bg-sec-02 pb-4" id="section-3">
        <div class="container p-0">
            <div class="row">
                <div class="col-12">
                    <h3 class="h2 sm fw-300 mb-2 color-02" data-aos="fade-up" data-aos-delay="0">สื่อสารองค์กร</h3>
                    <p class="fw-200" data-aos="fade-up" data-aos-delay="0">
                        อัพเดตข้อมูลข่าวประชาสัมพันธ์เกี่ยวกับหน่วยงาน</p>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2 align-self-center">
                    <?php include('component/go-section.php'); ?>
                </div>
                <div class="col-md-10 p-md-2 p-0">
                    <div class="tab-container tab-container-02" data-aos="fade-up" data-aos-delay="300">
                        <div class="tabs d-flex flex-nowrap align-items-center mb-5">
                            <?php
                                  foreach([
                                      'ประชาสัมพันธ์', 'ประกาศ', 'ภาพกิจกรรม', 
                                      'รับสมัครงาน'
                                  ] as $i=>$d){
                              ?>
                            <div class="tab color-black h-color-06 text-center <?php if($i==0)echo 'active'; ?>"
                                data-tab="<?= $i ?>" href="#">
                                <p class="fw-200"><?= $d ?></p>
                            </div>
                            <?php }?>
                        </div>
                        <div class="tab-contents mt-4">
                            <?php for($i=0; $i<4; $i++){?>
                            <div class="tab-content <?php if($i==0)echo 'active'; ?>" data-tab="<?= $i ?>">
                                <div class="slide-container">
                                    <div class="slides">
                                        <?php for($j=0; $j<7; $j++){?>
                                        <div class="slide">
                                            <div class="wrapper">
                                                <div class="card card-date-only p-3 m-2">
                                                    <div class="date text-center">
                                                        <div class="dd">
                                                            <h5 class="fw-500">24</h5>
                                                        </div>
                                                        <div class="mmyy">
                                                            <p class="sm">ส.ค.64</p>
                                                        </div>
                                                    </div>
                                                    <div class="topic">
                                                        <a href="#">ข่าวประกาศ <span class="color-05">(ใหม่)</span></a>

                                                    </div>
                                                    <div class="description th-sarabun">
                                                        <div class="description_header fw-700">
                                                            <a href="#">ข่าวประกาศที่ 609/2564 :</a>

                                                        </div>
                                                        <div class="description_content">
                                                            รายชื่อสถานศึกษาอาชีวศึกษา
                                                            ที่รับการประกันคุณภาพภายนอกระยะที่ 1 การประเมิน SAR
                                                            และรายชื่อผู้ประเมินภายนอก ประจำ
                                                        </div>
                                                    </div>
                                                    <div class="card__footer">
                                                        <div class="d-flex justify-content-between">
                                                            <div class="btn btn-pure read-more-btn p-0">
                                                                <a href="#">อ่านเพิ่มเติม</a>
                                                            </div>
                                                            <div class="stat d-flex flex-row text-center">
                                                                <a href="#" class="stat__view d-flex flex-column">
                                                                    <i class="fas fa-eye fa-md"></i>
                                                                    <div class="stat__view-number">
                                                                        <p class="sm mt-1">108</p>

                                                                    </div>
                                                                </a>
                                                                <a href="#"
                                                                    class="stat__share d-flex flex-column text-center">
                                                                    <i class="fas fa-share-alt fa-md"></i>
                                                                    <div class="stat__share-number">
                                                                        <p class="sm mt-1">20</p>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <?php }?>
                                    </div>
                                </div>
                            </div>
                            <?php }?>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>
    <section class="section-padding bg-sec-04" id="section-4">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6" style="padding:2rem 2rem 7rem 2rem;">
                    <div class="row">
                        <h3 class="h2 sm fw-300 mb-2 color-white" data-aos="fade-up" data-aos-delay="0">
                            ทันโลก มีมาตรฐาน<br>
                            บริการรวดเร็ว</h3>
                        <p class="fw-200 color-white" data-aos="fade-up" data-aos-delay="0" style="padding-right:10vw;">
                            เท่าทันการเปลี่ยนแปลงด้านการประเมินคุณภาพของสังคมโลกดำเนินงานเป็นไปตามข้อกำหนดที่
                            ได้รับการยอมรับ ทั้งในเชิงปริมาณและคุณภาพ
                            ส่งมอบรายงานผลการตรวจประเมินที่มีคุณค่า
                            ให้กับผู้รับบริการและผู้มีส่วนเกี่ยวข้องได้
                            อย่างรวดเร็ว แม่นยำ</p>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                </div>
            </div>
        </div>
    </section>
    <section class="section-bpadding bg-gray" id="section-5">
        <div class="container">
            <div class="row">
                <div class="col-12 p-0">
                    <h3 class="h2 sm fw-300 mb-2 color-02" data-aos="fade-up" data-aos-delay="0">คลังความรู้</h3>
                    <p class="fw-200" data-aos="fade-up" data-aos-delay="0">
                        อัพเดตข้อมูลข่าวประชาสัมพันธ์เกี่ยวกับหน่วยงาน</p>
                </div>

            </div>

        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2 align-self-center">
                    <?php include('component/go-section.php'); ?>
                </div>
                <div class="col-md-10 p-md-2 p-0">
                    <div class="tab-container tab-container-03" data-aos="fade-up" data-aos-delay="300">
                        <div class="tabs d-flex flex-nowrap align-items-center mb-5 ">
                            <?php
                                  foreach([
                                      'มัลติมีเดีย', 'อินโฟกราฟฟิก', 'ประชุมสัมนา', 
                                      'ผลประเมินภายนอก'
                                  ] as $i=>$d){
                              ?>
                            <div class="tab color-black h-color-06 text-center <?php if($i==0)echo 'active'; ?>"
                                data-tab="<?= $i ?>" href="#">
                                <p class="fw-200"><?= $d ?></p>
                            </div>
                            <?php }?>
                        </div>
                        <div class="tab-contents mt-4">
                            <?php for($i=0; $i<4; $i++){?>
                            <div class="tab-content <?php if($i==0)echo 'active'; ?>" data-tab="<?= $i ?>">
                                <div class="slide-container">
                                    <div class="slides">
                                        <?php for($j=0; $j<8; $j++){?>
                                        <div class="slide">
                                            <div class="wrapper-02 m-3">
                                                <div class="card card-img">
                                                    <div class="row">
                                                        <div class="col-4 p-0 bg-white">
                                                            <div class="video-container">
                                                                <div class="paly-button d-flex">
                                                                    <i class="fab fa-youtube fa-3x"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-8 px-3 py-2">
                                                            <div class="date">
                                                                14 พ.ค. 64
                                                            </div>
                                                            <div class="description th-sarabun">
                                                                <div class="description_content">
                                                                    รายชื่อสถานศึกษาอาชีวศึกษา
                                                                    ที่รับการประกันคุณภาพภายนอกระยะที่ 1 การประเมิน SAR
                                                                    และรายชื่อผู้ประเมินภายนอก ประจำ
                                                                </div>
                                                            </div>
                                                            <div class="card__footer">
                                                                <div class="d-flex justify-content-between">
                                                                    <div class="btn btn-pure read-more-btn p-0">
                                                                        <a href="#">อ่านเพิ่มเติม</a>
                                                                    </div>
                                                                    <div class="stat d-flex flex-row text-center">
                                                                        <a href="#"
                                                                            class="stat__view d-flex flex-column">
                                                                            <i class="fas fa-eye fa-md"></i>
                                                                            <div class="stat__view-number">
                                                                                <p class="sm mt-1">108</p>

                                                                            </div>
                                                                        </a>
                                                                        <a href="#"
                                                                            class="stat__share d-flex flex-column text-center">
                                                                            <i class="fas fa-share-alt fa-md"></i>
                                                                            <div class="stat__share-number">
                                                                                <p class="sm mt-1">20</p>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                        <?php }?>
                                    </div>
                                </div>
                            </div>
                            <?php }?>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <?php include_once('include/footer-inner.php'); ?>
    <?php include_once('include/script.php'); ?>

</body>

</html>