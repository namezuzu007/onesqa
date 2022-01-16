<div class="tab-container tab-container-04" data-aos="fade-up" data-aos-delay="300">
    <div class="tabs d-flex">
        <?php
                                                 foreach([
                                                     'ประกาศ', 'เครื่องมือ/คู่มือ', 'ผลประเมินภายนอก'
                                                 ] as $i=>$d){
                                             ?>
        <a class="tab color-black h-color-02 <?php if($i==0)echo 'active'; ?>" data-tab="<?= $i ?>" href="#">
            <p class="sm fw-500"><?= $d ?></p>
        </a>
        <?php }?>
    </div>
    <div class="tab-contents mt-3">
        <?php for($i=0; $i<3; $i++){?>
        <div class="tab-content <?php if($i==0)echo 'active'; ?>" data-tab="<?= $i ?>">
            <div class="row">
                <div class="col-2"><img class="w-10" src="public/assets/app/images/icon/pdf.png" alt="pdf-file"></div>
                <div class="col-10">
                    <p class="md fw-600 th-sarabun">
                        ประกาศที่ 353/2564
                    </p>
                    <p class="md mt-2 th-sarabun">
                        การปรับจำนวนผู้ประเมินภายนอกสำหรับการประเมินคุณภาพภายนอกสถานศึกษา
                        การศึกษาปฐมวัย (ศูนย์พัฒนาเด็ก) และ สถานศึกษาระดับ
                        การศึกษาขั้นพื้นฐาน</p>
                </div>
            </div>
        </div>
        <?php }?>
    </div>
</div>