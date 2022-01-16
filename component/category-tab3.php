<div class="tabs">
    <div class="ss-box-shadow"></div>
    <?php
        if(!isset($cateActive)) $cateActive = 0;
        foreach([
            'ประกาศ', 'กฎหมายที่เกี่ยวข้อง', 'คู่มือผู้ประเมิน', 'เกณฑ์การประเมิน', 
            'ประชุมสัมมนา', 'แบบฟอร์ม', 'มัลติมีเดีย'
        ] as $i=>$d){
    ?>
    <a class="tab tab-main color-black h-color-01 <?php if($i==$cateActive)echo 'active'; ?>" data-tab="<?= $i ?>"
        href="#">

        <span><?= $d ?></span>
    </a>
    <?php }?>
</div>