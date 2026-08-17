import os
import shutil
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY

def build_pdf(filename):
    # Page setup - 0.5 inch margins for perfect 1-page fit
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=32,
        bottomMargin=32
    )

    styles = getSampleStyleSheet()
    
    # Custom Palette
    PRIMARY = colors.HexColor('#1E3A8A')    # Deep Navy
    SECONDARY = colors.HexColor('#2563EB')  # Cobalt Blue
    TEXT_DARK = colors.HexColor('#0F172A')  # Slate 900
    TEXT_MUTED = colors.HexColor('#475569') # Slate 600
    LINE_COLOR = colors.HexColor('#CBD5E1') # Slate 300
    BG_TAG = colors.HexColor('#EFF6FF')     # Blue 50

    # Typography Styles
    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=PRIMARY,
        alignment=TA_CENTER,
        spaceAfter=3
    )

    title_style = ParagraphStyle(
        'TitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=SECONDARY,
        alignment=TA_CENTER,
        spaceAfter=4
    )

    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=TEXT_MUTED,
        alignment=TA_CENTER,
        spaceAfter=8
    )

    section_header_style = ParagraphStyle(
        'SectionHeaderStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=PRIMARY,
        spaceBefore=6,
        spaceAfter=2
    )

    body_style = ParagraphStyle(
        'BodyStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=TEXT_DARK,
        alignment=TA_JUSTIFY,
        spaceAfter=4
    )

    item_title_style = ParagraphStyle(
        'ItemTitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11.5,
        textColor=TEXT_DARK
    )

    item_company_style = ParagraphStyle(
        'ItemCompanyStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=SECONDARY
    )

    item_date_style = ParagraphStyle(
        'ItemDateStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8,
        leading=11,
        textColor=TEXT_MUTED,
        alignment=TA_RIGHT
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.25,
        leading=11,
        textColor=TEXT_DARK,
        leftIndent=10,
        spaceAfter=2
    )

    skill_category_style = ParagraphStyle(
        'SkillCategoryStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=PRIMARY
    )

    skill_items_style = ParagraphStyle(
        'SkillItemsStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.25,
        leading=11,
        textColor=TEXT_DARK
    )

    story = []

    # 1. Header
    story.append(Paragraph("ANGEL GABRIEL FLORES ELVIR", name_style))
    story.append(Paragraph("DESARROLLADOR FRONT-END & WEB | INFORMÁTICA ADMINISTRATIVA", title_style))
    
    contact_text = (
        "<b>Teléfono:</b> +504 8777-3101 &nbsp;|&nbsp; "
        "<b>Email:</b> angelflores.ipdrr@gmail.com &nbsp;|&nbsp; "
        "<b>Ubicación:</b> Tegucigalpa, Honduras<br/>"
        "<b>Portafolio:</b> angelf14.github.io/portafolio-personal &nbsp;|&nbsp; "
        "<b>GitHub:</b> github.com/angelF14 &nbsp;|&nbsp; "
        "<b>LinkedIn:</b> linkedin.com/in/angel-elvir-93b090181"
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(HRFlowable(width="100%", thickness=1, color=SECONDARY, spaceBefore=2, spaceAfter=5))

    # 2. Resumen Profesional
    story.append(Paragraph("RESUMEN PROFESIONAL", section_header_style))
    summary_text = (
        "Desarrollador Web y Pasante de Informática Administrativa con sólida experiencia en diseño, modernización y "
        "despliegue de aplicaciones web empresariales. Especializado en desarrollo frontend con <b>Angular</b> y <b>TypeScript</b>, "
        "arquitectura backend con <b>PHP/Laravel</b> y <b>Node.js</b>, y administración de bases de datos relacionales (<b>Oracle</b>, <b>MySQL</b>). "
        "Experiencia comprobada optimizando procesos críticos, migración de sistemas legacy y administración de infraestructura de servidores."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=LINE_COLOR, spaceBefore=3, spaceAfter=4))

    # 3. Experiencia Laboral
    story.append(Paragraph("EXPERIENCIA LABORAL", section_header_style))

    # Exp 1: UNAH
    exp1_header = [
        [
            Paragraph("<b>Desarrollador Front-End</b> (Pasantía y Práctica Profesional)", item_title_style),
            Paragraph("Enero 2026 – Actualidad", item_date_style)
        ],
        [
            Paragraph("Dirección de Gestión de Tecnología (DEGT) – UNAH", item_company_style),
            Paragraph("Tegucigalpa, HN", item_date_style)
        ]
    ]
    t1 = Table(exp1_header, colWidths=[380, 160])
    t1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t1)
    story.append(Paragraph("• Migración y modernización integral del sistema de gestión académica DIPP, transformando interfaces monolíticas a componentes modulares y reactivos con Angular y TypeScript.", bullet_style))
    story.append(Paragraph("• Implementación de nuevos flujos de usuario, diseño accesible con Material Design y optimización del rendimiento frontend.", bullet_style))
    story.append(Spacer(1, 4))

    # Exp 2: PCservices
    exp2_header = [
        [
            Paragraph("<b>Encargado del Departamento de Informática</b>", item_title_style),
            Paragraph("Enero 2025 – Enero 2026", item_date_style)
        ],
        [
            Paragraph("PCservices – Soporte a Grupo W", item_company_style),
            Paragraph("Tegucigalpa, HN", item_date_style)
        ]
    ]
    t2 = Table(exp2_header, colWidths=[380, 160])
    t2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t2)
    story.append(Paragraph("• Administración de servidores, mantenimiento de bases de datos relacionales y gestión de infraestructura tecnológica garantizando alta disponibilidad y seguridad.", bullet_style))
    story.append(Paragraph("• Automatización de backups, monitoreo de rendimiento de sistemas y soporte técnico especializado a plataformas de negocio críticas.", bullet_style))
    story.append(Spacer(1, 4))

    # Exp 3: Crefisa
    exp3_header = [
        [
            Paragraph("<b>Desarrollador Web</b> (Sistema de Gestión Documental y Crédito Automotriz)", item_title_style),
            Paragraph("Septiembre 2024 – Septiembre 2025", item_date_style)
        ],
        [
            Paragraph("Proyecto para Crefisa / Credifisa", item_company_style),
            Paragraph("Tegucigalpa, HN", item_date_style)
        ]
    ]
    t3 = Table(exp3_header, colWidths=[380, 160])
    t3.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t3)
    story.append(Paragraph("• Desarrollo integral de plataforma web para la automatización de expedientes de crédito automotriz y emisión de seguros, reduciendo tiempos de procesamiento manual.", bullet_style))
    story.append(Paragraph("• Construcción de módulos de autenticación segura, control de acceso por roles e integración frontend-backend utilizando Laravel, Node.js y MySQL.", bullet_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=LINE_COLOR, spaceBefore=3, spaceAfter=4))

    # 4. Formación Académica
    story.append(Paragraph("EDUCACIÓN", section_header_style))
    edu_table_data = [
        [
            Paragraph("<b>Licenciatura en Informática Administrativa</b> (En curso / Último año)", item_title_style),
            Paragraph("UNAH – Tegucigalpa, HN", item_date_style)
        ]
    ]
    t_edu = Table(edu_table_data, colWidths=[380, 160])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_edu)
    story.append(Paragraph("Universidad Nacional Autónoma de Honduras. Enfoque en desarrollo de software, análisis de sistemas y gestión de TI.", bullet_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=LINE_COLOR, spaceBefore=3, spaceAfter=4))

    # 5. Habilidades y Tecnologías
    story.append(Paragraph("HABILIDADES TÉCNICAS & HERRAMIENTAS", section_header_style))

    skills_data = [
        [
            Paragraph("• <b>Desarrollo Frontend:</b>", skill_category_style),
            Paragraph("Angular 21, TypeScript, JavaScript (ES6+), HTML5, CSS3/SCSS, Material Design, Bootstrap, Responsive Design.", skill_items_style)
        ],
        [
            Paragraph("• <b>Backend & APIs:</b>", skill_category_style),
            Paragraph("PHP, Laravel, Node.js, RESTful APIs, Python, Java, C++.", skill_items_style)
        ],
        [
            Paragraph("• <b>Bases de Datos:</b>", skill_category_style),
            Paragraph("Oracle Database, MySQL, SQL, PL/SQL, Optimización de Consultas.", skill_items_style)
        ],
        [
            Paragraph("• <b>DevOps, Nube & Herramientas:</b>", skill_category_style),
            Paragraph("Google Cloud Platform (GCP), AWS (básico), Administración de Servidores, Git, GitHub, Postman, Insomnia.", skill_items_style)
        ]
    ]

    t_skills = Table(skills_data, colWidths=[150, 390])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_skills)

    doc.build(story)
    print(f"Successfully generated {filename}")

def sync_cv():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    desktop_cv = r"C:\Users\DELL\Desktop\Personal\Personal\cv_ Angel Gabriel Flores Elvir.pdf"
    public_pdf = os.path.join(base_dir, 'public', 'cv_ Angel Gabriel Flores Elvir.pdf')
    root_pdf = os.path.join(base_dir, 'cv_ Angel Gabriel Flores Elvir.pdf')
    
    if os.path.exists(desktop_cv):
        print(f"Copiando CV oficial desde {desktop_cv}...")
        shutil.copy2(desktop_cv, public_pdf)
        shutil.copy2(desktop_cv, root_pdf)
        print("CV actualizado exitosamente con el documento oficial.")
    else:
        print(f"Ruta de origen no encontrada: {desktop_cv}. Manteniendo versión actual en public.")

if __name__ == '__main__':
    sync_cv()
