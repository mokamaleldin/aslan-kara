"""Build the bilingual two-page CVs with PyMuPDF's Arabic-aware HTML renderer.

Run: python scripts/build_cvs.py [--preview-dir /path/to/previews]
Requires: pymupdf. DejaVu Sans is used when available, with MuPDF font fallback.
"""

import argparse
import re
from html import escape
from pathlib import Path

import fitz


ROOT = Path(__file__).resolve().parents[1]
EMAIL = "aslankaraproduction@gmail.com"
SITE = "https://aslan-kara.com"
VIOLET = "#1f0062"


def p(text, cls=""):
    return f'<p class="{cls}">{text}</p>'


def section(title, content):
    return f"<h2>{escape(title)}</h2>{content}"


def bullets(items):
    return "<ul>" + "".join(f"<li>{item}</li>" for item in items) + "</ul>"


def job(number, company, period, role, items):
    if company == "MK+":
        company = '<span dir="ltr">\u202aMK+\u202c</span>'
    return (
        f'<div class="job"><h3><span class="step">{number}</span> {company}</h3>'
        f'<p class="job-meta" dir="ltr">{period} &nbsp; | &nbsp; {role}</p>'
        f"{bullets(items)}</div>"
    )


def header(ar, compact=False):
    align = "right" if ar else "left"
    if compact:
        return (
            f'<div class="mini-header" dir="ltr" style="text-align:{align}">'
            '<b>Aslan Kara</b> &nbsp; | &nbsp; Senior Video Editor</div>'
        )
    return (
        f'<div class="identity" dir="ltr" style="text-align:{align}">'
        '<h1>Aslan Kara</h1><p class="role">Senior Video Editor</p>'
        '<p class="location">Doha, Qatar &nbsp; | &nbsp; Istanbul, Turkey</p>'
        '<p class="contact">Qatar: +974 3347 7508 &nbsp; | &nbsp; Turkey: +90 542 820 9492</p>'
        f'<p class="contact"><a href="mailto:{EMAIL}">{EMAIL}</a>'
        f' &nbsp; | &nbsp; <a href="{SITE}">aslan-kara.com</a></p></div>'
    )


def portfolio(ar):
    links = [
        ("معرض الأعمال وتفاصيل المشروعات" if ar else "Portfolio and project details", f"{SITE}/{'ar' if ar else 'en'}/work"),
        ("مجموعة البروموهات والفواصل" if ar else "Promos and idents collection", "https://www.youtube.com/playlist?list=PLT6mqv0ccw4emVoq0xFIMX6CL1_pNebd_"),
        ("معرض Behance" if ar else "Behance portfolio", "https://www.behance.net/aslan-kara"),
        ("حان الآن" if ar else "7anaalan Podcast", "https://www.youtube.com/@7analaan"),
        ("بودكاست 28" if ar else "28 Podcast", "https://www.youtube.com/@28_podcast"),
        ("حلقة بودكاست مختارة" if ar else "Selected podcast episode", "https://youtu.be/X-H4PLqdGiE"),
        ("كليب حلم الميدان" if ar else "Helm El Meidan music video", "https://www.youtube.com/watch?v=EPi39RWqCAY"),
    ]
    return "<ul class=portfolio>" + "".join(
        f'<li><a href="{escape(url, quote=True)}">{escape(label)}</a></li>'
        for label, url in links
    ) + "</ul>"


def pages(ar):
    if ar:
        summary = (
            "متخصص في المونتاج التلفزيوني والرقمي بخبرة مهنية منذ 2017، عبر المؤسسات الإعلامية "
            "وشركات الإنتاج والمشروعات المستقلة. تشمل أعمالي البرامج الحوارية والاجتماعية والتقارير "
            "الإخبارية والبروموهات والفيديو جراف، إلى جانب إنتاج البودكاست وتنسيق الاستوديو "
            "ومراحل ما بعد الإنتاج من المادة المصوّرة إلى النسخة النهائية."
        )
        first = header(True)
        first += section("الملخص المهني", p(summary))
        first += section("أبرز الإنجازات المهنية منذ 2017", bullets([
            "مونتاج أكثر من 1,500 حلقة حوارية وأكثر من 1,000 حلقة من البرامج الاجتماعية عبر المسيرة المهنية.",
            "تنفيذ أكثر من 1,000 تقرير إخباري وأكثر من 700 عمل فيديو جراف ضمن إجمالي الأعمال المهنية.",
        ]))
        career = job("01", "رجب ميديا", "2017 - 2021", "Video Editor", [
            "المونتاج التلفزيوني والرقمي ضمن العمل في الإعلام والإنتاج، وتطوير الخبرة في السرد البصري والمونتاج."
        ])
        career += job("02", "MK+", "2021 - 2022", "Video Editor", [
            "مونتاج المحتوى التلفزيوني والرقمي ومتابعة مراحل إعداد النسخ النهائية للتسليم والنشر."
        ])
        career += job("03", "دوام ميديا", "2022 - Present", "Senior Video Editor", [
            "مونتاج أكثر من 800 حلقة برامجية، وتنفيذ أكثر من 100 برومو ومادة ترويجية ضمن العمل في دوام ميديا.",
            "مونتاج الحلقات والفقرات والتقارير والإعلانات والفواصل، مع ضبط السرد والإيقاع البصري.",
            "تصحيح الألوان ومونتاج الصوت ومعالجته، وتجهيز النسخ النهائية للبث والنشر وفق متطلبات الجودة ومواعيد التسليم.",
            "الاستفادة من أدوات الذكاء الاصطناعي في دعم الإنتاج الإبداعي وتطوير سير عمل المونتاج."
        ])
        first += section("المسار المهني", career)
        first += section("العمل المستقل", p(
            "تعاونات مع مؤسسات وجهات إنتاج أخرى، تشمل المونتاج وإنتاج البودكاست ومشروعات إخراج مختارة."
        ))
        second = header(True, compact=True)
        second += section("المشروعات المستقلة", "<h3>إنتاج البودكاست ومونتاجه</h3>" + bullets([
            "إنتاج ومونتاج أكثر من 50 حلقة بودكاست مستقلة، ضمن مشروعات تشمل حان الآن وبودكاست 28.",
            "تجهيز الاستوديو وتنسيق المتطلبات الفنية للتصوير، مع الإشراف العملي على الإخراج والتقديم البصري.",
            "مونتاج الصورة ومعالجة الصوت وتجهيز الحلقات للنشر، وإعداد البروموهات والمقاطع القصيرة."
        ]) + "<h3>الفكرة والإخراج والمونتاج</h3>" + p(
            "تطوير فكرة كليب «حلم الميدان» وإخراجه ومونتاجه، بمدة عرض 4 دقائق و41 ثانية."
        ))
        second += section("نماذج مختارة من الأعمال", portfolio(True))
        second += section("البرامج والمهارات التقنية", p(
            "Premiere Pro · After Effects · DaVinci Resolve · Audition · Fairlight · Photoshop · Illustrator · Lightroom", "software"
        ) + p(
            "المونتاج التلفزيوني والرقمي؛ السرد البصري؛ الفيديو جراف والموشن جرافيك؛ تصحيح الألوان؛ "
            "مونتاج الصوت والمكساج؛ التسليم النهائي؛ إنتاج البودكاست وتنسيق الاستوديو."
        ))
        second += section("دورات مهنية مختارة", "<h3>معهد الجزيرة للإعلام</h3>" + p(
            "صناعة الأفلام الوثائقية؛ المونتاج: الرؤية والإبداع؛ إنتاج البرامج الإخبارية التلفزيونية؛ التقرير التلفزيوني الإخباري."
        ) + "<h3>Udemy</h3>" + p(
            "Adobe Premiere Pro؛ Adobe Photoshop؛ Adobe After Effects؛ Adobe Audition؛ تصحيح الألوان للمونتاج."
        ) + "<h3>إدراك</h3>" + p(
            "تنسيق الإنفوجرافيك المتحرك؛ عين المصمم؛ مقدمة في التفكير التصميمي."
        ))
    else:
        first = header(False)
        first += section("Professional Summary", p(
            "Senior Video Editor working in broadcast and digital production since 2017, across media "
            "organizations, production companies and independent projects. Experience includes talk shows, "
            "social programs, news reports, promos and videographics, alongside independent podcast "
            "production, studio coordination and full-cycle post-production."
        ))
        first += section("Career Highlights Since 2017", bullets([
            "Edited 1,500+ talk-show episodes and 1,000+ social-program episodes across professional roles.",
            "Edited 1,000+ news reports and 700+ videographics for broadcast and digital media."
        ]))
        career = job("01", "Ragab Media", "2017 - 2021", "Video Editor", [
            "Broadcast and digital editing within media and production, developing visual storytelling and editing experience."
        ])
        career += job("02", "MK+", "2021 - 2022", "Video Editor", [
            "Edited television and digital content and prepared final deliverables for publication and delivery."
        ])
        career += job("03", "Dawam Medya", "2022 - Present", "Senior Video Editor", [
            "Edited 800+ program episodes and created 100+ promos and promotional pieces within the Dawam Medya role.",
            "Edit programs, segments, reports, commercials and idents, shaping narrative flow and visual pacing.",
            "Handle color correction, audio editing and finishing, and final delivery for broadcast and digital publication, meeting quality standards and production deadlines.",
            "Use AI tools to support creative production and improve editing workflows."
        ])
        first += section("Career Timeline", career)
        first += section("Freelance", p(
            "Independent collaborations with other media organizations and production teams, including editing, podcast production and selected directing projects."
        ))
        second = header(False, compact=True)
        second += section("Independent Projects", "<h3>Podcast Production and Editing</h3>" + bullets([
            "Produced and edited 50+ independent podcast episodes, including projects for 7anaalan and 28 Podcast.",
            "Oversee studio setup, coordinate filming requirements and provide hands-on direction and visual presentation oversight.",
            "Handle picture and audio editing, publishing deliverables, promos and short-form clips."
        ]) + "<h3>Concept, Direction and Editing</h3>" + p(
            "Developed the concept, directed and edited Helm El Meidan, a music video with a runtime of 4 minutes 41 seconds."
        ))
        second += section("Selected Portfolio", portfolio(False))
        second += section("Software and Technical Skills", p(
            "Premiere Pro · After Effects · DaVinci Resolve · Audition · Fairlight · Photoshop · Illustrator · Lightroom", "software"
        ) + p(
            "Broadcast and digital editing; visual storytelling; videographics and motion graphics; "
            "color correction; audio editing and mixing; final delivery; podcast production and studio coordination."
        ))
        second += section("Selected Professional Development", "<h3>Al Jazeera Media Institute</h3>" + p(
            "Documentary Film Production; Editing: Vision and Creativity; Producing Television News Programs; Television News Reporting."
        ) + "<h3>Udemy</h3>" + p(
            "Adobe Premiere Pro; Adobe Photoshop; Adobe After Effects; Adobe Audition; Color Correction for Editors."
        ) + "<h3>Edraak</h3>" + p(
            "Motion Infographics Coordination; The Designer's Eye; Introduction to Design Thinking."
        ))
    return [first, second]


CSS = """
body { margin: 0; padding: 0; font-family: sans-serif; font-size: 10.2pt;
  line-height: 1.45; color: #24212b; }
h1 { margin: 0; color: #1f0062; font-size: 27pt; line-height: 1.15; }
h2 { color: #1f0062; font-size: 12pt; margin: 15pt 0 6pt;
  padding-bottom: 4pt; border-bottom: .6pt solid #ded0e4; }
h3 { margin: 8pt 0 3pt; font-size: 10.4pt; color: #1f0062; }
p { margin: 3pt 0 6pt; }
ul { margin: 4pt 0 6pt; padding-left: 14pt; }
li { margin-bottom: 3pt; }
a { color: #1f0062; text-decoration: none; }
.identity { padding-bottom: 9pt; border-bottom: 1.4pt solid #1f0062; }
.role { color: #1f0062; font-size: 13pt; margin: 5pt 0 9pt; }
.location, .contact { font-size: 8.8pt; margin: 2pt 0; }
.mini-header { color: #1f0062; font-size: 11pt; padding-bottom: 9pt;
  margin-bottom: 10pt; border-bottom: 1pt solid #1f0062; }
.job { border-left: 1.5pt solid #bea4d3; padding-left: 10pt; margin: 10pt 0; }
.job h3 { margin-top: 0; font-size: 11.5pt; }
.step { font-size: 9pt; color: #6b6273; }
.job-meta { font-size: 9pt; color: #6b6273; margin: 2pt 0 4pt; }
.portfolio li { margin-bottom: 4pt; }
.software { direction: ltr; line-height: 1.6; }
.ar { direction: rtl; text-align: right; font-size: 10.6pt; }
.ar ul { padding-left: 0; padding-right: 14pt; }
.ar .job { border-left: none; border-right: 1.5pt solid #bea4d3;
  padding-left: 0; padding-right: 10pt; }
.ar .job-meta, .ar .software { text-align: right; }
"""

RTL_CSS = """
p, li, h2, h3 { direction: rtl; text-align: right; }
ul { direction: rtl; text-align: right; list-style-position: inside; }
.identity p, .job-meta, .software { direction: ltr; text-align: right; }
"""


def build(preview_dir=None):
    font_dir = Path("/usr/share/fonts/truetype/dejavu")
    css = CSS
    archive = None
    if (font_dir / "DejaVuSans.ttf").exists():
        css += """
        @font-face { font-family: Resume; src: url(DejaVuSans.ttf); }
        @font-face { font-family: Resume; src: url(DejaVuSans-Bold.ttf); font-weight: bold; }
        body { font-family: Resume, sans-serif; }
        """
        archive = fitz.Archive(str(font_dir))
    out_dir = ROOT / "public/cv"
    out_dir.mkdir(parents=True, exist_ok=True)
    for locale in ("AR", "EN"):
        ar = locale == "AR"
        doc = fitz.open()
        for index, content in enumerate(pages(ar)):
            page = doc.new_page(width=595.276, height=841.89)
            if ar:
                # MuPDF mirrors physical text alignment inside RTL paragraphs.
                # Keep Latin contact/role lines LTR and align Arabic blocks to the right edge.
                content = re.sub(
                    r"<(p|h2|h3|li)(\b[^>]*)>",
                    lambda match: f'<{match[1]}{match[2]} style="text-align:{"right" if any(key in match[2] for key in ("ltr", "role", "location", "contact", "software")) else "left"}">',
                    content,
                )
                content = re.sub(
                    r"<ul[^>]*>(.*?)</ul>",
                    lambda match: re.sub(
                        r"<li[^>]*>(.*?)</li>",
                        r'<p dir="rtl" class="bullet" style="text-align:left">• \1</p>',
                        match[1], flags=re.S,
                    ),
                    content, flags=re.S,
                )
            html = f'<div class="{"ar" if ar else "en"}" dir="{"rtl" if ar else "ltr"}">{content}</div>'
            spare, scale = page.insert_htmlbox(
                fitz.Rect(40, 35, 555.276, 800), html,
                css=css + (RTL_CSS if ar else ""), archive=archive, scale_low=1,
            )
            if spare < 0 or scale != 1:
                raise RuntimeError(f"{locale} page {index + 1} does not fit at the chosen readable font size")
            page.insert_text((40, 823), "Aslan Kara | Senior Video Editor", fontsize=7.5, color=(.42, .38, .45))
            page.insert_text((530, 823), f"{index + 1} / 2", fontsize=7.5, color=(.42, .38, .45))
        doc.set_metadata({"title": f"Aslan Kara - Senior Video Editor | {locale} CV", "author": "Aslan Kara"})
        doc.subset_fonts()
        path = out_dir / f"ASLAN_KARA_CV_{locale}.pdf"
        doc.save(path, garbage=4, deflate=True)
        print(f"{locale}: {len(doc)} pages, no scaling, {path.stat().st_size} bytes")
        doc.close()
        if preview_dir:
            preview_dir.mkdir(parents=True, exist_ok=True)
            with fitz.open(path) as saved:
                for index, page in enumerate(saved):
                    page.get_pixmap(matrix=fitz.Matrix(1.4, 1.4)).save(preview_dir / f"{locale}-{index + 1}.png")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--preview-dir", type=Path)
    build(parser.parse_args().preview_dir)
